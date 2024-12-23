import React from "react";
import Image from "next/image";
import Link from "next/link";

// Your gadgets array with fallback image handling
const gadgets = [
  { id: 1, name: "Apple Watch Series 10", image: "/g1.webp" },
  { id: 2, name: "Instax Mini 99", image: "/g2.jpg" },
  { id: 3, name: "Sony PlayStation 5 Pro Console", image: "/g3.jpg" }, 
  { id: 4, name: "Apple iPad Pro", image: "/g4.avif" },
  { id: 5, name: "DJI Air 3", image: "/g5.avif" },
  { id: 6, name: "Samsung Galaxy S24 Ultra", image: "/g6.jpg" },
  { id: 7, name: "Wireless Charging Stand", image: "/g7.webp" }, 
  { id: 8, name: "Temperature controlled Mug", image: "/g8.avif" },
];

const GadgetsPage = () => {
  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full">
      {/* Top content */}
      <div className="mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        {/* Image section */}
        <div className="md:mr-20 w-[320px] md:w-[500px] mb-10 md:mb-0">
          <Image
            src="/gadgets-image.png"
            alt="image"
            width={500}
            height={400}
            className="object-cover object-center rounded-[10px] md:ml-10 sm:ml-40"
          />
        </div>

        {/* Content section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left">
          <h1 className="font-inter sm:text-[40px] text-[30px] mb-4 mt-10 md:mt-0 font-medium text-[#007BFF]">
            Latest Technology Gadgets
          </h1>
          <p className="mb-4 font-inter text-[18px] text-[#333333] font-normal">
            Latest technology gadgets are revolutionizing the way we live and
            interact with the world. From smartwatches that track health metrics
            and connect seamlessly with other devices, to next-gen smartphones
            boasting advanced cameras and AI-powered features, technology is
            becoming more integrated into our daily lives. Innovations like
            wireless earbuds with superior sound quality and augmented reality
            glasses are enhancing both entertainment and productivity. With
            rapid advancements in AI, wearables, and IoT devices, gadgets are
            becoming smarter, faster, and more efficient than ever before.
          </p>
        </div>
      </div>

      {/* Gadgets Section */}
      <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-6 md:mt-24 md:pl-20 justify-center items-center overflow-y-auto md:overflow-y-visible md:max-h-full max-h-[300px]">
        {/* Mapping for products */}
        {gadgets.map((gadget) => (
          <div
            key={gadget.id}
            className="w-full flex flex-col items-center text-center md:items-start"
          >
            <Link href={`/gadgets/${gadget.id}`} passHref>
                <div className="w-[200px] h-[200px] relative">
                  <Image
                    src={gadget.image || "/default-image.jpg"} // Fallback image if not available
                    alt={gadget.name}
                    layout="fill" // Ensures image maintains aspect ratio
                    objectFit="contain" // Maintains image aspect ratio
                    className="rounded-[4px]"
                  />
                </div>
                <h3 className="font-inter text-[18px] text-[#007bff] font-medium mt-4">
                  {gadget.name}
                </h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GadgetsPage;
