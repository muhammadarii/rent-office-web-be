import { motion } from "framer-motion";
import Footer from "../components/Footer";
import About from "../components/Home/About";
import Facility from "../components/Home/Facility";
import Header from "../components/Home/Header";
import SponsorSlider from "../components/Home/SponsorSlider";
import Testimonials from "../components/Home/Testimonials";
import Navbar from "../components/Navbar/Navbar";
import CityWrappers from "../wrappers/CityWrappers";
import OfficeWrappers from "../wrappers/OfficeWrappers";

const fadeIn = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Home = () => {
  return (
    <div className="font-poppins">
      <div className="relative z-10">
        <Navbar />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mt-4"
      >
        <Header />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <SponsorSlider />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <CityWrappers />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <About />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Facility />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <OfficeWrappers />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
