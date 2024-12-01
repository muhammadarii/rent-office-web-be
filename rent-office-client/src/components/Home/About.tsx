import Pict1 from "../../assets/images/image1.jpg";

const data = [
  {
    id: 1,
    image: Pict1,
  },
  {
    id: 2,
    image: Pict1,
  },
  {
    id: 3,
    image: Pict1,
  },
  {
    id: 4,
    image: Pict1,
  },
];

const About = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 w-full h-auto pb-20 md:mt-20 px-4 md:px-20">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <span className="flex flex-row font-bold text-[25px] md:text-[40px] mt-10 gap-3">
              Welcome to <p className="text-[#8DD3BB]">Golobe Offices</p>
            </span>

            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod malesuada erat, sit amet dignissim dolor rutrum sit amet.
              Nunc convallis euismod nisl, nec dignissim nulla vehicula non.
              Donec lacinia, augue vel sollicitudin finibus, nunc nisl ultricies
              nisl, id pulvinar nisl nisl eu nunc.
            </p>
            <p className="mt-4 text-gray-400 hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod malesuada erat, sit amet dignissim dolor rutrum sit amet.
              Nunc convallis euismod nisl, nec dignissim nulla vehicula non.
              consectetur adipiscing elit. Sed euismod malesuada erat, sit amet
              dignissim dolor rutrum sit amet. Nunc convallis euismod nisl, nec
              dignissim nulla vehicula non.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed euismod malesuada erat, sit amet
              dignissim dolor rutrum sit amet.
            </p>

            <button className="px-5 py-2 border-2 mb-10 border-black rounded-xl mt-6 text-black font-semibold hover:border-[#8DD3BB] hover:text-[#8DD3BB] transition">
              Discover More
            </button>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="grid grid-cols-2 gap-4">
            {data.map((item) => (
              <div className="md:w-[250px] md:h-[250px]">
                <img
                  src={Pict1}
                  alt="thumbnail"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
