import { Link } from "react-router-dom";
import { City } from "../../types/type";

interface CityCardProps {
  city: City;
}
const CityCard = ({ city }: CityCardProps) => {
  const baseURL = "http://127.0.0.1:8000/storage/";
  return (
    <div className="flex flex-row justify-center items-center gap-2 w-fit">
      <div className="relative w-[200px] h-[300px] md:w-[350px] md:h-[400px] shadow-sm">
        <div className="z-10 absolute rounded-2xl w-full h-full bg-gradient-to-t from-black to-transparent opacity-60" />
        <img
          src={`${baseURL}/${city.photo}`}
          alt="thumbnails"
          className="rounded-2xl w-full h-full object-cover"
        />
        <div className="absolute flex flex-col z-10 bottom-5 left-[10px] md:left-[30px]">
          <p className="text-white text-xs md:text-[18px] tracking-wide">
            {city.name}
          </p>
          <p className="text-white text-xs md:text-[15px] tracking-wide md:mt-2">
            {city.officeSpaces_count} Office Spaces
          </p>
        </div>
        <Link to={`/city/${city.slug}`}>
          <button className="z-10 absolute bg-[#8DD3BB] w-[50px] h-[20px] md:w-[80px] md:h-[30px] rounded-sm bottom-5 right-[10px] md:right-[30px] text-black text-[10px] hover:bg-white ">
            More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CityCard;
