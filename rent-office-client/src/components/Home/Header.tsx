import Image from "../../assets/images/image1.jpg";
import Grow from "../../assets/images/grow.png";

const Header = () => {
  return (
    <div className="-mt-10">
      <div className="absolute rounded-2xl w-full h-[600px] md:h-[700px] bg-gradient-to-b from-black to-transparent opacity-60" />
      <img
        src={Image}
        alt="Header"
        className="rounded-2xl w-full h-[600px] md:h-[700px] object-cover"
      />
      <img
        src={Grow}
        alt="Header Text"
        className="md:w-[753px] md:h-[202px] absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      />
    </div>
  );
};

export default Header;
