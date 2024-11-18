import { useEffect } from "react";
import { Link } from "react-router-dom";
import OfficeCard from "../components/Home/OfficeCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchOffices } from "../redux/slice/officesSlice";

const OfficeWrappers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { offices, loading, error } = useSelector(
    (state: RootState) => state.offices
  );

  useEffect(() => {
    dispatch(fetchOffices());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error}</p>;
  }

  return (
    <>
      <h2 className="font-extrabold font-poppins text-[32px] leading-[48px] text-center my-5">
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
