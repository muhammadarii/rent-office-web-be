import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Office } from "../../types/type";
import { z } from "zod";
import apiClient from "../../services/apiService";
import { isAxiosError } from "axios";
import { bookingSchema } from "../../types/validationBooking";
import { IoLocationSharp } from "react-icons/io5";
import { BiCheckShield, BiCalendar, BiEditAlt } from "react-icons/bi";
import mandiri from "../../assets/images/mandiri.png";
import Loader from "../ui/Loader";

const BookCard = () => {
  const { slug } = useParams<{ slug: string }>();
  const [office, setOffice] = useState<Office | null>(null);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    started_at: "",
    office_space_id: "",
    totalAmountWithUniqueCode: 0,
  });

  const [fomrErrors, setFormErrors] = useState<z.ZodIssue[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [uniqueCode, setUniqueCode] = useState<number>(0);
  const [totalAmountWithUniqueCode, setTotalAmountWithUniqueCode] =
    useState<number>(0);

  useEffect(() => {
    console.log("Fetching office data...");
    apiClient
      .get(`/office/${slug}`)
      .then((response) => {
        console.log("Office data fetched successfully:", response.data.data);
        setOffice(response.data.data);

        const officeSpaceId = response.data.data.id;
        const generatedUniqueCode = Math.floor(100 + Math.random() * 900);
        const grandTotal = response.data.data.price - generatedUniqueCode;

        setUniqueCode(generatedUniqueCode);
        setTotalAmountWithUniqueCode(grandTotal);

        setFormData((prevData) => ({
          ...prevData,
          office_space_id: officeSpaceId,
          total_amount: grandTotal,
        }));
        setLoading(false);
      })
      .catch((error: unknown) => {
        if (isAxiosError(error)) {
          console.error("Error fetching office data:", error.message);
          setError(error.message);
        } else {
          console.error("Unexpected error:", error);
          setError("An unexpected error occurred.");
        }
        setLoading(false);
      });
  }, [slug]);
  console.log("Submitting formData:", formData);

  if (Loading) {
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (Error) {
    return <p>Error loading data: {Error}</p>;
  }

  if (!office) {
    return <p>No office found</p>;
  }
  const baseURL = "http://127.0.0.1:8000/storage/";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlesSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Validating form data...");
    const validation = bookingSchema.safeParse(formData);

    if (!validation.success) {
      console.error("Validation errors:", validation.error.issues);
      setFormErrors(validation.error.issues);
      return;
    }
    console.log("Form data is valid. Submitting...", formData);

    setIsLoading(true);

    try {
      const response = await apiClient.post("/booking-transaction", {
        ...formData,
      });
      console.log("Form submitted successfully:", response.data.data);

      navigate("/success-booking", {
        state: {
          office,
          booking: response.data.data,
        },
      });
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        console.error("Error submitting form:", error.message);
        console.error("Error details:", error.response?.data);
        setError(error.response?.data.message || error.message);
        setError(error.message);
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center items-start gap-4 mt-[-80px] z-10">
        {/* info booking */}
        <form onSubmit={handlesSubmit} className="flex gap-4 justify-between">
          <div className="bg-white border-2 border-[#8DD3BB] w-[700px] h-auto pb-14 rounded-xl shadow-xl">
            <div className="pt-10 pl-8 flex flex-row gap-4">
              <div className="flex shrink-0 w-[140px] h-[100px] rounded-[20px] overflow-hidden">
                <img
                  src={`${baseURL}/${office.thumbnail}`}
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
              <div>
                <h1 className="font-bold text-[20px] mt-4">{office.name}</h1>
                <div className="flex flex-row gap-2 items-center">
                  <IoLocationSharp className="w-5 h-5" />
                  <p className="font-semibold text-[20px]">
                    {office.city.name}
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-10 px-8">
              <p className="font-semibold text-[20px]">Complete The Details</p>

              <div className="flex flex-col gap-2 mt-4">
                <label className="font-semibold">Full Name</label>
                <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
                  <BiCheckShield className="w-6 h-6 text-[#8DD3BB]" />
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    id="name"
                    className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                    placeholder="Write your complete name"
                  />
                  {fomrErrors.find((error) => error.path.includes("name")) && (
                    <p className="text-red-500">Name is required</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="phone" className="font-semibold">
                  Phone Number
                </label>
                <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
                  <BiEditAlt className="w-6 h-6 text-[#8DD3BB]" />
                  <input
                    type="tel"
                    name="phone_number"
                    onChange={handleChange}
                    value={formData.phone_number}
                    id="phone_number"
                    className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                    placeholder="Write your valid number"
                  />
                  {fomrErrors.find((error) =>
                    error.path.includes("phone_number")
                  ) && <p className="text-red-500">Phone Number is required</p>}
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="date" className="font-semibold">
                  Started At
                </label>
                <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A] overflow-hidden">
                  <BiCalendar className="w-6 h-6 text-[#8DD3BB]" />
                  <input
                    type="date"
                    name="started_at"
                    onChange={handleChange}
                    value={formData.started_at}
                    id="date"
                    className="relative appearance-none outline-none w-full py-3 font-semibold [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0"
                  />
                  {fomrErrors.find((error) =>
                    error.path.includes("started_at")
                  ) && <p className="text-red-500">Date is required</p>}
                </div>
              </div>

              <div className="flex justify-center items-center gap-3 mt-8">
                <p className="font-semibold leading-[28px]">
                  Kami akan melindungi privasi Anda sebaik mungkin sehingga
                  dapat fokus bekerja
                </p>
              </div>
            </div>
          </div>
          {/* detail payment */}
          <div className="bg-white border-2 border-[#8DD3BB] w-[500px] h-auto pb-14 rounded-xl shadow-xl">
            <div className="pt-10 px-8">
              <p className="font-semibold text-[20px] flex justify-center items-center">
                Your Order Details
              </p>
              <div className="flex justify-between items-center mt-8">
                <p className="font-semibold text-[18px]">Duration</p>
                <p className="font-semibold text-[18px]">
                  {office.duration} days working
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="font-semibold text-[18px]">Sub Total</p>
                <p className="font-semibold text-[18px]">
                  Rp. {office.price.toLocaleString("id")}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="font-semibold text-[18px]">Unique Code</p>
                <p className="font-semibold text-[18px] text-[#FF2D2D]">
                  -Rp. {uniqueCode}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="font-bold text-[20px]">Grand Total</p>
                <p className="font-bold text-[20px] text-[#0D903A]">
                  -Rp.{" "}
                  {totalAmountWithUniqueCode.toLocaleString("id", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>
              <p className="font-bold text-[18px] mt-8">Send Payment to</p>
              <div className="flex items-center gap-3">
                <div className="w-[71px] flex shrink-0">
                  <img
                    src={mandiri}
                    className="w-full object-contain"
                    alt="bank logo"
                  />
                </div>
                <div className="flex flex-col gap-[2px] mt-4">
                  <div className="flex items-center gap-1">
                    <p className="font-semibold">M Ari Purnomo Aji</p>
                    <BiCheckShield className="w-5 h-5 text-[#0D903A]" />
                  </div>
                  <p>008883232818328</p>
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center mt-8 justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
              >
                <span>{isLoading ? "Loading..." : "I’ve Already Paid"}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookCard;
