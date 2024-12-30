import Image from "next/image";

// Your gadgets array (could also be fetched from an API)
const gadgets = [
  { id: 1, name: "Apple Watch Series 10", image: "/g1.webp" },
  { id: 2, name: "Instax Mini 99", image: "/g2.jpg" },
  { id: 3, name: "Sony PlayStation 5 Pro Console", image: "/g3.jpg" },
  { id: 4, name: "Apple iPad Pro", image: "/g4.avif" },
  { id: 5, name: "DJI Air 3", image: "/g5.avif" },
  { id: 6, name: "Samsung Galaxy S24 Ultra", image: "/g6.jpg" },
  {
    id: 7,
    name: "Belkin Magsafe 3-in-1 Wireless Charging Stand",
    image: "/g7.webp",
  },
  { id: 8, name: "Ember temperature controlled Mug", image: "/g8.avif" },
];

const GadgetDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params; // Get the dynamic ID from the URL params

  // Find the gadget based on the ID
  const gadget = gadgets.find((gadget) => gadget.id === Number(id));

  if (!gadget) {
    return <p>Gadget not found</p>; // Handle case where gadget is not found
  }

  return (
    <section className="flex flex-col items-center">
      <Image
        src={gadget.image}
        alt={gadget.name}
        width={300}
        height={400}
        className="object-cover object-center rounded-[10px] mt-20"
      />
      {/* You can add more details about the gadget below */}
      <h1 className="font-inter text-center text-[24px] md:text-[40px] text-[#007BFF] font-medium mb-4 mt-10">
        {gadget.name}
      </h1>
      <p className="text-[#333333] text-center font-normal text-[18px] mt-2">
        This is the {gadget.name}, a revolutionary product in the world of
        technology.
      </p>
    </section>
  );
};

export default GadgetDetailPage;
