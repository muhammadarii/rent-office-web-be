/* eslint-disable jsx-a11y/iframe-has-title */
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchOfficeDetailsBySlug } from "../../redux/slice/officeDetailsSlice";
import { FaLocationDot } from "react-icons/fa6";
import { BiCheckDouble } from "react-icons/bi";

const InfoCard = () => {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { office } = useSelector((state: RootState) => state.detailsOffices);

  useEffect(() => {
    if (slug) {
      dispatch(fetchOfficeDetailsBySlug(slug));
    }
  }, [slug, dispatch]);

  if (!office) {
    return <div></div>;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-start gap-4 mt-[-80px] portrait:px-4">
        <div className="bg-white border-2 border-[#8DD3BB] md:w-[800px] h-auto pb-14 rounded-xl shadow-xl">
          <div className="pt-8 px-8">
            <h1 className="font-bold text-[30px]">{office.name}</h1>
            <div className="flex flex-row gap-2 items-baseline">
              <FaLocationDot className="w-5 h-5" />
              <p className="font-semibold text-[20px]">{office.city.name}</p>
            </div>
          </div>
          <p className="pt-8 px-8 font-medium potrait:text-xs">
            {office.about}
          </p>
          <div className="pt-8 px-8">
            <h1 className="font-bold text-[20px]">Office Address</h1>
            <p className="font-medium">{office.name}</p>
            <p className="font-medium">{office.address}</p>
          </div>
          <div className="h-[400px] px-2 rounded-xl shadow-xl mt-8">
            <iframe
              className="h-full w-full"
              src={`https://www.google.com/maps/embed/v1/place?q=${office.city.name},&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
            />
          </div>
        </div>
        <div className="bg-white border-2 border-[#8DD3BB] md:w-[500px] h-auto pb-10 rounded-xl shadow-xl">
          <div className="pt-8 px-8">
            <p className="font-bold text-[30px]">
              Rp.{office.price.toLocaleString("id")}
            </p>
            <p className="font-semibold text-lg">
              For {office.duration} days working
            </p>
            <div className="mt-10 ">
              {office.benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex flex-row gap-4 mt-2 items-center"
                >
                  <BiCheckDouble className="md:w-8 md:h-8 text-[#8DD3BB]" />
                  <p className="font-semibold text-[15px] portrait:text-[12px]">
                    {benefit.name}
                  </p>
                </div>
              ))}
            </div>
            <Link to={`/office/${office.slug}/book`}>
              <button className="bg-[#8DD3BB] w-full h-[50px] rounded-xl mt-10 font-semibold text-white hover:bg-white hover:text-[#8DD3BB] hover:border-2 hover:border-[#8DD3BB]">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
