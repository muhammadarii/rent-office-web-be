import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { City } from "../../types/type";
import apiClient from "../../services/apiService";
import Loader from "../ui/Loader";

const Header = () => {
  const baseURL = "http://127.0.0.1:8000/storage/";

  const { slug } = useParams<{ slug: string }>();
  const [city, setCity] = useState<City | null>(null);

  useEffect(() => {
    apiClient
      .get(`/city/${slug}`)
      .then((response) => {
        setCity(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  if (!city) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative -mt-10">
      <img
        src={`${baseURL}/${city.photo}`}
        alt="Header"
        className="rounded-2xl w-full h-[300px] md:h-[400px] object-cover"
      />
      <div className="bg-white w-[800px] h-[250px] rounded-xl absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl border-2 border-[#8DD3BB]">
        <div className="absolute top-[50%] left-[40%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-2xl font-bold">Great Office In</h1>
          <h1 className="text-5xl font-bold mb-4">{city.name} City</h1>
          <span>
            Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih
            baik dan sehat dalam tumbuhkan karir.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
