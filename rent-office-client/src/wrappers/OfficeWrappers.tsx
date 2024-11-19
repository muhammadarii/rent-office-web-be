import { useEffect } from "react";
import { Link } from "react-router-dom";
import OfficeCard from "../components/Home/OfficeCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchOffices } from "../redux/slice/officesSlice";
import Loader from "../components/ui/Loader";

const OfficeWrappers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { offices, loading, error } = useSelector(
    (state: RootState) => state.offices
  );

  useEffect(() => {
    dispatch(fetchOffices());
  }, [dispatch]);

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

  return (
    <>
      <h2 className="font-extrabold font-poppins md:text-[32px] md:leading-[48px] text-center my-10">
        Browse Our Fresh Space.
        <br />
        For Your Better Productivity.
      </h2>
      <div className="grid md:grid-cols-3 gap-[30px] mx-auto container px-4">
        {offices.map((office) => (
          <Link to={`/office/${office.slug}`}>
            <OfficeCard key={office.id} office={office} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default OfficeWrappers;
