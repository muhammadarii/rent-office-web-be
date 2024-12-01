import { Link } from "react-router-dom";

const NavMobile = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/popular", label: "Popular" },
    { path: "/categories", label: "Categories" },
    { path: "/events", label: "Events" },
    { path: "/check-booking", label: "Check Booking" },
  ];

  return (
    <div className="md:hidden absolute top-[49px] left-0 right-0  bg-black bg-opacity-70 text-white py-4 space-y-4 flex flex-col items-center rounded-b-2xl">
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
    </div>
  );
};

export default NavMobile;
