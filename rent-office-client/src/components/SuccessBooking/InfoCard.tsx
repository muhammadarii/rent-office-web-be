import { Link, useLocation } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";

const InfoCard = () => {
  const location = useLocation();
  const { office, booking } = location.state;

  const baseURL = "http://127.0.0.1:8000/storage/";

  console.log("details booking: " + booking.booking_trx_id);

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-white border-2 border-[#8DD3BB] w-[450px] h-auto rounded-xl shadow-xl">
        <div>
          <p className="font-bold text-center mt-4 text-[30px] text-[#8DD3BB]">
            - BOOKING FINISHED -
          </p>
        </div>
        <div className="flex items-center gap-4 p-8">
          <div className="flex shrink-0 w-[140px] h-[100px] rounded-[20px] overflow-hidden">
            <img
              src={`${baseURL}/${office.thumbnail}`}
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl leading-[30px]">{office.name}</p>
            <div className="flex items-center gap-[6px]">
              <FaLocationDot />
              <p className="font-semibold">{office.city.name}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 px-8">
          <LuNewspaper className="w-8 h-8" />
          <div>
            <p className="font-bold">{booking.booking_trx_id}</p>
            <p className="text-sm leading-[21px] mt-[2px]">
              Save your booking ID securely
            </p>
          </div>
        </div>
        <hr className="border-[#F6F5FD] mt-10" />
        <p className="font-semibold leading-[28px] text-center mt-5">
          Pesanan Anda sedang kami proses, kami akan menginformasikan status
          Anda melalui WhatsApp
        </p>
        <Link to={"/check-booking"}>
          <div className="flex items-center border-2 justify-center w-full rounded-full mb-10 p-[16px_26px] mt-10 gap-3 bg-[#8DD3BB] font-bold text-[#F7F7FD] hover:bg-white hover:border-2 hover:border-[#8DD3BB] hover:text-[#8DD3BB]">
            <span>View Booking Details</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
