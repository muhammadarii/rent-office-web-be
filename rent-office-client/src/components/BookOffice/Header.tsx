import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchOfficeDetailsBySlug } from "../../redux/slice/officeDetailsSlice";
import Loader from "../ui/Loader";

const Header = () => {
  const baseURL = "http://127.0.0.1:8000/storage/";

  const { slug } = useParams<{ slug: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { office, loading } = useSelector(
    (state: RootState) => state.detailsOffices
  );

  useEffect(() => {
    if (slug) {
      dispatch(fetchOfficeDetailsBySlug(slug));
    }
  }, [slug, dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!office) {
    return <p>No office found</p>;
  }

  return (
    <>
      <div className="relative w-full h-[440px] -z-10">
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
        <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-[60px] border-4 border-[#8DD3BB] px-10 z-10 text-white cursor-default">
          {office.name}
        </p>
        <img
          src={`${baseURL}/${office.thumbnail}`}
          alt="thumbnails"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Header;
