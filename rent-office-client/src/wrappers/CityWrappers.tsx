import { useEffect } from "react";
import CityCard from "../components/Home/CityCard";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchCities } from "../redux/slice/citiesSlice";

const CityWrappers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cities, loading, error } = useSelector(
    (state: RootState) => state.cities
  );

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error}</p>;
  }

  return (
    <>
      <div className="flex flex-row overflow-x-scroll scrollbar-hide mx-4 mt-[-100px] gap-4">
        {cities.map((city) => (
          <CityCard city={city} />
        ))}
      </div>
    </>
  );
};

export default CityWrappers;
