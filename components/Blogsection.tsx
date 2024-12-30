import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaComment } from "react-icons/fa";

function Blogsection() {
  return (
    <section className="w-full overflow-hidden md:pb-20">
      {/* main content */}
      <div className="text-center mb-12 mt-20 mx-4 md:mx-0">
        <h2 className="font-inter text-[36px] font-medium text-[#007BFF] mb-4">
          Our Blogs
        </h2>
        <p className="font-inter text-[18px] font-normal text-[#333333]">
          Dive into our latest tech insights and innovations that are shaping
          the future of the industry.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-14">
        {/* card 1 */}
        <div className="md:w-[370px] sm:w-[400px] w-[350px] p-4">
          <div className="rounded-[4px] shadow-[#333333] shadow-md pt-6 hover:bg-[#eeecec91]">
            <Image
              src="/ai.png"
              alt="blog"
              width={300}
              height={300}
              className="mx-auto rounded-[4px]"
            />
            <div className="py-6 sm:px-8 px-2">
              <h1 className="font-inter text-[20px] text-[#000000] font-medium mb-3">
                Artificial Intelligence
              </h1>
              <p className="font-inter text-[16px] text-[#333333] font-normal mb-3">
                Artificial Intelligence (AI) refers to the simulation of human
                intelligence in machines that are programmed to think and learn
                like humans.
              </p>
              <div className="flex items-center justify-between">
                <button className="font-inter text-[18px] font-normal text-[#007bff]">
                  <Link href="/blog">Learn More</Link>
                </button>
                <div className="flex space-x-4">
                  <button className="flex items-center text-[#333333] hover:text-[#000000]">
                    <FaEye className="mr-2" /> 12.1k
                  </button>
                  <button className="flex items-center text-[#333333] hover:text-[#000000]">
                    <FaComment className="mr-2" /> 1k
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="md:w-[370px] sm:w-[400px] w-[350px] p-4">
          <div className="rounded-[4px] shadow-[#333333] shadow-md pt-6 hover:bg-[#eeecec91]">
            <Image
              src="/trends.webp"
              alt="blog"
              width={300}
              height={300}
              className="mx-auto rounded-[4px]"
            />
            <div className="py-6 sm:px-8 px-2">
              <h1 className="font-inter text-[20px] text-[#000000] font-medium mb-3">
                Latest Technology Trends
              </h1>
              <p className="font-inter text-[16px] text-[#333333] font-normal mb-3">
                Latest technology trends are shaping the future, with
                advancements in artificial intelligence, 5G, and quantum
                computing at the forefront.
              </p>
              <div className="flex items-center justify-between">
                <button className="font-inter text-[18px] font-normal text-[#007bff]">
                <Link href="/blog">Learn More</Link>
                </button>
                <div className="flex space-x-4">
                  <button className="flex items-center text-[#333333] hover:text-[#000000]">
                    <FaEye className="mr-2" /> 12.1k
                  </button>
                  <button className="flex items-center text-[#333333] hover:text-[#000000]">
                    <FaComment className="mr-2" /> 1k
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="md:w-[370px] sm:w-[400px] w-[350px] p-4">
          <div className="rounded-[4px] shadow-[#333333] shadow-md pt-6 hover:bg-[#eeecec91]">
            <Image
              src="/cyber-security.jpg"
              alt="blog"
              width={300}
              height={300}
              className="mx-auto rounded-[4px]"
            />
            <div className="py-6 sm:px-8 px-2">
              <h1 className="font-inter text-[20px] text-[#000000] font-medium mb-3">
                Cyber Security
              </h1>
              <p className="font-inter text-[16px] text-[#333333] font-normal mb-3">
                Cybersecurity involves protecting systems, networks, and data
                from digital threats such as hacking, malware, and data
                breaches.
              </p>
              <div className="flex items-center justify-between">
                <button className="font-inter text-[18px] font-normal text-[#007bff]">
                <Link href="/blog">Learn More</Link>
                </button>
                <div className="flex space-x-4">
                  <button className="flex items-center text-[#333333] hover:text-[#000000]">
                    <FaEye className="mr-2" /> 12.1k
                  </button>
                  <button className="flex items-center text-[#333333] hover:text-[#000000]">
                    <FaComment className="mr-2" /> 1k
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="text-center mt-10">
        <button className="font-inter text-[18px] font-normal text-[#ffffff] bg-[#007bff] px-6 py-4 rounded-[4px]">
        <Link href="/blog">Visit For More</Link>
        </button>
      </div>
    </section>
  );
}

export default Blogsection;
