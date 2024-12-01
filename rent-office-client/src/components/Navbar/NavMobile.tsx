import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavMobile = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/popular", label: "Popular" },
    { path: "/categories", label: "Categories" },
    { path: "/events", label: "Events" },
    { path: "/check-booking", label: "Check Booking" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: "0%", transition: { duration: 0.5 } },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={mobileMenuVariants}
        exit="exit"
        className="md:hidden absolute top-[0.5px] left-0 right-0 bg-black bg-opacity-70 text-white py-4 space-y-4 flex flex-col items-center rounded-b-2xl"
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="hover:text-[#8DD3BB] transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <button className="px-5 py-2 border-2 rounded-full text-white font-semibold hover:border-[#8DD3BB] hover:text-[#8DD3BB] transition">
          Contact Us
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default NavMobile;
