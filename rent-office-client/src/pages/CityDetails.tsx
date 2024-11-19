import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import OfficeCard from "../components/Home/OfficeCard";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import apiClient from "../services/apiService";
import { City } from "../types/type";
import Loader from "../components/ui/Loader";
import Header from "../components/CityDetails/Header";

const CityDetails = () => {
  const baseURL = "http://127.0.0.1:8000/storage/";

  const { slug } = useParams<{ slug: string }>();
  const [city, setCity] = useState<City | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .get(`/city/${slug}`)
      .then((response) => {
        setCity(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [slug]);

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
      <div className="grid md:grid-cols-3 gap-[30px] mt-[200px] mx-4">
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
