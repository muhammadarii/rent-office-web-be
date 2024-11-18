import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Importing icons for menu toggle
import Logo from "../../assets/images/Logo.png";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "Browse" },
    { path: "/popular", label: "Popular" },
    { path: "/categories", label: "Categories" },
    { path: "/events", label: "Events" },
    { path: "/check-booking", label: "Check Booking" },
  ];

  return (
    <div
      className={`flex justify-between items-center px-6 py-3 md:py-4 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-black backdrop-blur-2xl bg-opacity-40"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center cursor-pointer">
        <img src={Logo} alt="Logo" className="w-[80px] md:w-[140px]" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 font-semibold text-white">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="hover:text-[#8DD3BB] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-white">
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-5 py-2 border-2 rounded-full text-white font-semibold hover:border-[#8DD3BB] hover:text-[#8DD3BB] transition">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && <NavMobile />}
    </div>
  );
};

export default Navbar;
