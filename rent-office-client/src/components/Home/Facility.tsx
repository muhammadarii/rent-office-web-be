import Marquee from "react-fast-marquee";
import { HiEyeOff, HiBriefcase, HiShoppingCart } from "react-icons/hi";

const data = [
  {
    id: 1,
    title: "Privacy-First Design",
    desc: "A privacy security for our best customers, we provide everything for you",
    icon: <HiEyeOff className="w-10 h-10 md:w-20 md:h-20 text-white" />,
  },
  {
    id: 2,
    title: "Easy Move Accessibility",
    desc: "Providing all the convenience in your travel access with a strategic location",
    icon: <HiBriefcase className="w-10 h-10 md:w-20 md:h-20 text-white" />,
  },
  {
    id: 3,
    title: "Extra Snacks Available",
    desc: "We provide extra special snacks for our customers.",
    icon: <HiShoppingCart className="w-10 h-10 md:w-20 md:h-20 text-white" />,
  },
];

const Facility = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold md:text-[40px] text-center mb-6">
        We Might Good For Your Business
      </h1>
      <div className="flex flex-row">
        <Marquee autoFill loop={0} speed={20} direction="right">
          {data.map((item) => (
            <div
              key={item.id}
              className="md:w-[570px] md:h-[300px] bg-white rounded-xl shadow-xl mx-4 justify-items-center p-2 border-2 border-[#8DD3BB]"
            >
              <div className="flex justify-center items-center mt-4 md:mt-10 bg-[#8DD3BB] w-14 h-14 md:w-24 md:h-24 rounded-3xl">
                {item.icon}
              </div>
              <div className="flex flex-col justify-center items-center text-center mb-4">
                <h1 className="font-bold md:text-[30px]">{item.title}</h1>
                <span className="text-xs">{item.desc}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Facility;
