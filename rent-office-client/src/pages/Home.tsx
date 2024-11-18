import Footer from "../components/Footer";
import Header from "../components/Home/Header";
import Navbar from "../components/Navbar/Navbar";
import CityWrappers from "../wrappers/CityWrappers";
import OfficeWrappers from "../wrappers/OfficeWrappers";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <CityWrappers />
      <OfficeWrappers />
      <Footer />
    </>
  );
};

export default Home;
