import { useEffect } from "react";
import CityCard from "../components/Home/CityCard";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchCities } from "../redux/slice/citiesSlice";
import { Link } from "react-router-dom";
import Loader from "../components/ui/Loader";

const CityWrappers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cities, loading, error } = useSelector(
    (state: RootState) => state.cities
  );

  useEffect(() => {
    dispatch(fetchCities());
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
      <div className="flex flex-row overflow-x-scroll scrollbar-hide mx-4 mt-14 mb-8 gap-4">
        {cities.map((city) => (
          <Link to={`/city/${city.slug}`}>
            <CityCard city={city} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default CityWrappers;
