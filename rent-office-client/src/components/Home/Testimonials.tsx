import { VscComment } from "react-icons/vsc";

const data = [
  {
    id: 1,
    name: "Juliana Putri",
    email: "julianaputri@example.com",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ratione rerum quaerat.",
  },
  {
    id: 2,
    name: "Muhammad Ari",
    email: "muhammadari@example.com",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ratione rerum quaerat.",
  },
  {
    id: 3,
    name: "Adelia Putri",
    email: "adeliaputri@example.com",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ratione rerum quaerat.",
  },
  {
    id: 4,
    name: "Prabowo Subianto",
    email: "prabowosubianto@example.com",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ratione rerum quaerat.",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-40">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-[20px] md:text-[40px] ">
            What do our <span className="text-[#8DD3BB]">Customer Says?</span>
          </h1>
          <p className="md:text-[20px] font-semibold text-gray-400">
            Apa yang mereka katakan
          </p>
          <div className="flex flex-col md:flex-row md:gap-20 mt-10">
            {data.map((item) => (
              <div key={item.id} className="w-[250px] h-[250px] ">
                <div className="flex justify-center items-center">
                  <VscComment className="w-8 h-8 text-[#8DD3BB]" />
                </div>
                <div className="justify-center items-center mt-4">
                  <p className="text-center text-gray-400 font-semibold">
                    {item.comment}
                  </p>
                  <p className="text-center mt-4 font-bold">{item.name}</p>
                  <p className="text-center text-gray-400 text-xs">
                    {item.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
