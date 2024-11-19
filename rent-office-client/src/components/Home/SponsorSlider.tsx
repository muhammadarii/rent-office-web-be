import Marquee from "react-fast-marquee";
import LogoMandiri from "../../assets/images/mandiri.png";
import LogoMicrosoft from "../../assets/images/Microsoft.png";
import LogoBUMN from "../../assets/images/BUMN.png";
import LogoBUMA from "../../assets/images/BUMA.png";

const SponsorSlider = () => {
  return (
    <div className=" my-4 md:my-5 shadow-xl flex flex-row justify-center items-center">
      <Marquee autoFill loop={0}>
        <img
          src={LogoBUMN}
          alt="Logo"
          className="w-[50px] md:w-[100px] mx-4 md:mx-10"
        />
        <img
          src={LogoMandiri}
          alt="Logo"
          className="w-[50px] md:w-[100px] mx-4 md:mx-10"
        />
        <img
          src={LogoMicrosoft}
          alt="Logo"
          className="w-[50px] md:w-[100px] mx-4 md:mx-10"
        />
        <img
          src={LogoBUMA}
          alt="Logo"
          className="w-[50px] md:w-[100px] mx-4 md:mx-10"
        />
      </Marquee>
    </div>
  );
};

export default SponsorSlider;
