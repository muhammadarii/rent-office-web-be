import { Office } from "../../types/type";
import { CiClock2 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { ImConnection } from "react-icons/im";
import { SiFsecure } from "react-icons/si";

interface OfficeCardProps {
  office: Office;
}

const OfficeCard = ({ office }: OfficeCardProps) => {
  const baseURL = "http://127.0.0.1:8000/storage/";
  return (
    <>
      <div className="flex flex-col rounded-[20px] border-2 border-[##8DD3BB] bg-white overflow-hidden shadow-xl ">
        <div className="relative w-full h-[200px]">
          <img
            src={`${baseURL}/${office.thumbnail}`}
            className="w-full h-full object-cover"
            alt="thumbnails"
          />
        </div>
        <div className="flex flex-col p-5 pb-[30px] gap-4 ">
          <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
            {office.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="font-bold text-xl leading-[30px]">
              Rp{office.price.toLocaleString("id")}
            </p>
            <div className="flex items-center justify-end gap-[6px]">
              <p className="font-bold">{office.duration} days</p>
              <CiClock2 className="w-5 h-5 font-bold " />
            </div>
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-end gap-[6px]">
              <IoLocationSharp className="w-5 h-5 font-bold " />
              <p className="font-bold">{office.city.name}</p>
            </div>
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-end gap-[6px]">
              <ImConnection className="w-5 h-5 font-bold " />
              <p className="font-semibold">Fast-Connection</p>
            </div>
            <div className="flex items-center justify-end gap-[6px]">
              <SiFsecure className="w-5 h-5 font-bold " />
              <p className="font-semibold">Secure 100%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficeCard;
