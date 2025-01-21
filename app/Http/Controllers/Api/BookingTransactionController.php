<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookingTransactionRequest;
use App\Http\Resources\Api\BookingTransactionResource;
use App\Http\Resources\Api\ViewBookingResource;
use App\Models\BookingTransaction;
use App\Models\OfficeSpace;
use Illuminate\Http\Request;
use Twilio\Rest\Client;

class BookingTransactionController extends Controller
{
    //
    public function booking_details(Request $request)
    {
        $request->validate([
            'phone_number' => 'required|string',
            'booking_trx_id' => 'required|string',
        ]);

        $booking = BookingTransaction::where('phone_number', $request->phone_number)
            ->where('booking_trx_id', $request->booking_trx_id)
            ->with(['officeSpace','officeSpace.city'])
            ->first();

        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }
        return new ViewBookingResource($booking);
    }

    public function store(StoreBookingTransactionRequest $request)
    {
        $validatedData = $request->validated();

        $officeSpace = OfficeSpace::find($validatedData['office_space_id']);

        $validatedData['is_paid'] = false;
        $validatedData['booking_trx_id'] = BookingTransaction::generateUniqueTrxId();
        $validatedData['duration'] = $officeSpace->duration;
        $validatedData['ended_at'] = (new \DateTime($validatedData['started_at']))
        ->modify("+{$officeSpace->duration} days")->format('Y-m-d');

        $bookingTransaction = BookingTransaction::create($validatedData);


        // mengirim notif melalui sms atau whatsapp dengan twilio
        $sid = getenv("TWILIO_ACCOUNT_SID");
        $token = getenv("TWILIO_AUTH_TOKEN");
        $twilio = new Client($sid, $token);

        //create the message with line breaks
        $messageBody = "Hi {$bookingTransaction->name}, Terimakasih telah booking kantor di RentOffice.\n\n";
        $messageBody .= "Pesanan kantor {$bookingTransaction->officeSpace->name} Anda sedang kami proses dengan Booking TRX ID: {$bookingTransaction->booking_trx_id}.\n\n";
        $messageBody .= "Kami akan menginformasikan kembali status pemesanan Anda secepat mungkin.";

        //kirim dengan fitur sms
        // $message = $twilio->messages->create(
        //     // "+628127387919",
        //     "+{$bookingTransaction->phone_number}",
        //     [
        //         "body" => $messageBody,
        //         "from" =>getenv("TWILIO_PHONE_NUMBER"),
        //     ]
        //     );

        $message = $twilio->messages
        ->create("whatsapp:+{$bookingTransaction->phone_number}",
            array(
                "from" => "whatsapp:+14155238886",
                "body" => $messageBody
            ));

        // mengembalikan response hasil transaksi
        $bookingTransaction->load('officeSpace');
        return new BookingTransactionResource($bookingTransaction);
    }
}
