import Logo from "../assets/images/Logo 2.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-6 w-full h-auto bg-[#8DD3BB] pb-20 mt-20 gap-4 px-4 md:px-10">
        <div className="justify-items-center mt-[100px] cursor-pointer">
          <img src={Logo} alt="logo" />
          <div className="flex gap-3 mt-4">
            <AiFillInstagram className="md:w-5 md:h-5 hover:w-8 hover:h-8" />
            <AiFillFacebook className="md:w-5 md:h-5 hover:w-8 hover:h-8" />
            <AiFillYoutube className="md:w-5 md:h-5 hover:w-8 hover:h-8" />
            <AiFillTwitterCircle className="md:w-5 md:h-5 hover:w-8 hover:h-8" />
          </div>
        </div>
        <div className="flex-col gap-2 mt-24 cursor-pointer hidden md:flex">
          <h1 className="font-bold">Our Destinations</h1>
          <span>Canada</span>
          <span>Alaksa</span>
          <span>France</span>
          <span>Iceland</span>
        </div>
        <div className="flex-col gap-2 mt-24 cursor-pointer hidden md:flex">
          <h1 className="font-bold">Our Activitiies</h1>
          <span>Northem Lights</span>
          <span>Crusising & Sailing</span>
          <span>Multi-activities</span>
          <span>Kayaing</span>
        </div>
        <div className="flex-col gap-2 mt-5 md:mt-24 cursor-pointer hidden md:flex">
          <h1 className="font-bold">Travel Blogs</h1>
          <span>Bali Travel Guide</span>
          <span>Sri Lanks Travel Guide</span>
          <span>Peru Travel Guide</span>
          <span>Bali Travel Guide</span>
        </div>
        <div className="flex flex-col gap-2 mt-24 cursor-pointer">
          <h1 className="font-bold">About Us</h1>
          <span>Our Story</span>
          <span>Work with us</span>
        </div>
        <div className="flex flex-col gap-2 mt-24 cursor-pointer">
          <h1 className="font-bold">Contact Us</h1>
          <span>Our Story</span>
          <span>Work with us</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
