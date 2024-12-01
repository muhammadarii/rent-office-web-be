import { useState } from "react";
import Banner from "../../assets/images/image1.jpg";
import { z } from "zod";
import { BookingDetails } from "../../types/type";
import { viewBookingSchema } from "../../types/validationBooking";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BiCheckShield, BiCalendar } from "react-icons/bi";
import { FiCoffee } from "react-icons/fi";
import { PiSneakerMoveBold } from "react-icons/pi";

const InfoCard = () => {
  const [formData, setFormData] = useState({
    phone_number: "",
    booking_trx_id: "",
  });

  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );
  const [, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlesSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Validating form data...");
    const validation = viewBookingSchema.safeParse(formData);

    if (!validation.success) {
      console.error("Validation errors:", validation.error.issues);
      setFormErrors(validation.error.issues);
      return;
    }

    console.log("Form data is valid. Submitting...", formData);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/check-booking",
        {
          ...formData,
        },
        {
          headers: {
            "X-API-KEY": "23g4k2j3g4kjgj23gk243jg4jklj",
          },
        }
      );
      console.log("Wa are checking your boooking:", response.data.data);
      setBookingDetails(response.data.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Error submitting form:", error.message);
        setError(error.message);
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  const BaseURL = "http://127.0.0.1:8000/storage";

  return (
    <div className="font-poppins">
      <div className="relative w-full h-[240px] flex items-center shrink-0 overflow-hidden -mb-[50px]">
        <h1 className="text-center mx-auto font-extrabold md:text-[40px] leading-[60px] text-white mb-5 z-20">
          View Your Booking Details
        </h1>
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
        <img
          src={Banner}
          className="absolute w-full h-full object-cover object-center"
          alt=""
        />
      </div>

      <section className="relative flex flex-col md:w-[930px] shrink-0 gap-[30px] mx-auto mb-[100px] z-20 portrait:px-4">
        <form
          onSubmit={handlesSubmit}
          className="md:flex items-end rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[16px] bg-white "
        >
          <div className="flex flex-col w-full gap-2 ">
            <label className="font-semibold">Booking TRX ID</label>
            <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#8DD3BB]">
              <LuNewspaper className="w-6 h-6" />
              <input
                type="text"
                name="booking_trx_id"
                onChange={handleChange}
                value={formData.booking_trx_id}
                id="name"
                className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                placeholder="Write your booking trx id"
              />
            </div>
            {formErrors.find((error) =>
              error.path.includes("booking_trx_id")
            ) && <p>Booking TRX ID is required</p>}
          </div>
          <div className="flex flex-col w-full gap-2 portrait:mb-4 ">
            <label htmlFor="phone" className="font-semibold">
              Phone Number
            </label>
            <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
              <FiPhone className="w-6 h-6" />
              <input
                type="tel"
                name="phone_number"
                onChange={handleChange}
                value={formData.phone_number}
                id="phone"
                className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                placeholder="Write your valid number"
              />
            </div>
            {formErrors.find((error) =>
              error.path.includes("phone_number")
            ) && <p>Phone number is required</p>}
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="flex items-center justify-center rounded-full  p-[12px_30px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
          >
            <span className="text-nowrap">
              {isLoading ? "Loading..." : "Check Booking"}
            </span>
          </button>
        </form>

        {bookingDetails && (
          <div className="grid md:grid-cols-2 gap-[30px] ">
            <div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
              <div className="flex items-center gap-4">
                <div className="flex shrink-0 w-[140px] h-[100px] rounded-[20px] overflow-hidden">
                  <img
                    src={`${BaseURL}/${bookingDetails.office.thumbnail}`}
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-xl leading-[30px]">
                    {bookingDetails.office.name}
                  </p>
                  <div className="flex items-center gap-[6px]">
                    <FaLocationDot />
                    <p className="font-semibold">
                      {bookingDetails.office.city.name}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <div className="flex flex-col gap-4">
                <h2 className="font-bold">Customer Details</h2>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Full Name</h3>
                  <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                    <BiCheckShield className="w-6 h-6" />
                    <p className="font-semibold">{bookingDetails.name}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Phone Number</h3>
                  <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                    <FiPhone className="w-5 h-5" />
                    <p className="font-semibold">
                      {bookingDetails.phone_number}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Started At</h3>
                  <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                    <BiCalendar className="w-6 h-6" />
                    <p className="font-semibold">{bookingDetails.started_at}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Ended At</h3>
                  <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                    <BiCalendar className="w-6 h-6" />
                    <p className="font-semibold">{bookingDetails.ended_at}</p>
                  </div>
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <div className="flex justify-center items-center gap-3">
                <MdOutlinePrivacyTip className="w-6 h-6 text-[#0D903A]" />
                <p className="font-semibold leading-[28px]">
                  Privasi Anda aman bersama kami.
                </p>
              </div>
            </div>
            <div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
              <h2 className="font-bold">Order Details</h2>
              <div className="flex flex-col gap-5">
                {bookingDetails.is_paid ? (
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Status Pembayaran</p>
                    <p className="rounded-full w-fit p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                      SUCCESS
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Status Pembayaran</p>
                    <p className="rounded-full w-fit p-[6px_16px] bg-[#FF852D] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                      PENDING
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <p className="font-semibold">Booking TRX ID</p>
                  <p className="font-bold">{bookingDetails.booking_trx_id}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Duration</p>
                  <p className="font-bold">
                    {bookingDetails.duration} Days Working
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Total Amount</p>
                  <p className="font-bold text-[22px] leading-[33px] text-[#0D903A]">
                    Rp {bookingDetails.total_amount.toLocaleString("id")}
                  </p>
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <h2 className="font-bold">Bonus Packages For You</h2>
              <div className="flex md:flex-row flex-col items-center justify-between portrait:gap-10">
                <div className="flex items-center gap-4">
                  <FiCoffee className="w-8 h-8 text-[#0D903A]" />
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Extra Snacks</p>
                    <p className="text-sm leading-[21px]">Work-Life Balance</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <PiSneakerMoveBold className="w-8 h-8 text-[#0D903A]" />
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Free Move</p>
                    <p className="text-sm leading-[21px]">Anytime 24/7</p>
                  </div>
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <div className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[12px_20px] gap-3 bg-white font-semibold">
                <FiPhone className="w-6 h-6" />
                <span>Call Customer Service</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default InfoCard;
