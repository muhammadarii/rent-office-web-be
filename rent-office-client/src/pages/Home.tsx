import Footer from "../components/Footer";
import Facility from "../components/Home/Facility";
import Header from "../components/Home/Header";
import SponsorSlider from "../components/Home/SponsorSlider";
import Testimonials from "../components/Home/Testimonials";
import Navbar from "../components/Navbar/Navbar";
import CityWrappers from "../wrappers/CityWrappers";
import OfficeWrappers from "../wrappers/OfficeWrappers";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <SponsorSlider />
      <CityWrappers />
      <Facility />
      <OfficeWrappers />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
