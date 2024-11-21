import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchOfficeDetailsBySlug } from "../../redux/slice/officeDetailsSlice";
import Loader from "../ui/Loader";

const Header = () => {
  const baseURL = "http://127.0.0.1:8000/storage/";

  const { slug } = useParams<{ slug: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { office, loading, error } = useSelector(
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

  if (error) {
    return <p>Error loading data: {error}</p>;
  }

  if (!office) {
    return <p>No office found</p>;
  }
  return (
    <div className="flex flex-row overflow-x-scroll scrollbar-hide">
      <div className="flex flex-row gap-4 w-fit">
        <div className="w-[700px] h-[500px] rounded-b-xl">
          <img
            src={`${baseURL}/${office.thumbnail}`}
            alt="thumbnails"
            className="rounded-b-xl w-full h-full object-cover"
          />
        </div>
        {office.photos.map((photo) => (
          <div className="w-[700px] h-[500px] rounded-b-xl">
            <img
              src={`${baseURL}/${photo.photo}`}
              alt="thumbnails"
              className="rounded-b-xl w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
