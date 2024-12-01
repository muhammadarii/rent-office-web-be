import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import OfficeCard from "../components/Home/OfficeCard";
import Navbar from "../components/Navbar/Navbar";

import Header from "../components/CityDetails/Header";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchCityDetailsBySlug } from "../redux/slice/cityDetailsSlice";
import Loader from "../components/ui/Loader";

const CityDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { city, loading, error } = useSelector(
    (state: RootState) => state.detailsCities
  );

  useEffect(() => {
    if (slug) {
      dispatch(fetchCityDetailsBySlug(slug));
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

  if (!city) {
    return <p>No city found</p>;
  }

  return (
    <>
      <Navbar />
      <Header />
      <div className="grid md:grid-cols-3 gap-[30px] mt-[200px] mx-auto container px-4">
        {city.officeSpaces.map((office) => (
          <Link to={`/office/${office.slug}`}>
            <OfficeCard key={office.id} office={office} />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default CityDetails;
