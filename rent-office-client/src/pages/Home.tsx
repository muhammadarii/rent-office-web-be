import Footer from "../components/Footer";
import About from "../components/Home/About";
import Facility from "../components/Home/Facility";
import Header from "../components/Home/Header";
import SponsorSlider from "../components/Home/SponsorSlider";
import Testimonials from "../components/Home/Testimonials";
import Navbar from "../components/Navbar/Navbar";
import CityWrappers from "../wrappers/CityWrappers";
import OfficeWrappers from "../wrappers/OfficeWrappers";

const Home = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Header />
      <SponsorSlider />
      <CityWrappers />
      <About />
      <Facility />
      <OfficeWrappers />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
