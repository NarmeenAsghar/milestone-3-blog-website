import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaComment } from "react-icons/fa";
import Commentsection from "@/components/Commentsection";

function page() {
  return (
    <section className="w-full">
      {/* top content */}
      <div className="mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        {/* image section */}
        <div className="md:mr-20 w-[320px] md:w-[500px]">
          <Image
            src="/blog-image.jpg"
            alt="image"
            width={500}
            height={400}
            className="object-cover object-center rounded-[10px] md:ml-10 sm:ml-40"
          />
        </div>

        {/* content section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-16 md:mb-0">
          <h1 className="font-inter sm:text-[40px] text-[30px] mb-4 mt-10 md:mt-0 font-medium text-[#007BFF]">
            Our Blogs
          </h1>
          <h2 className="font-inter text-[24px] text-[#000000] font-medium mb-2">
            The Future of Technology
          </h2>
          <p className="mb-4 font-inter text-[18px] text-[#333333] font-normal">
            Welcome to our technology blog, where we bring you the most
            up-to-date insights, in-depth reviews, and expert opinions on the
            latest advancements in the tech world. Whether you`re a gadget
            enthusiast, a software developer, or just someone interested in how
            technology is shaping our future, our blog covers it all. From
            groundbreaking innovations in AI, the internet of things (IoT), and
            blockchain, to detailed guides on the newest smartphones and smart
            home devices, we provide content that helps you stay informed. Join
            us on this exciting journey through the ever-evolving world of
            technology and stay ahead of the curve with our expert analysis and
            tips.
          </p>
        </div>
      </div>

      {/* sections-1 */}
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* div-1 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-[#7c7c7c73] border-opacity-60 rounded-[4px] overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover rounded-t rounded-[4px] object-center"
                src="/ai-1.jpg"
                alt="blog"
                width={300}
                height={300}
              />
              <div className="p-6">
                <h2 className="font-inter font-medium text-[#333333] text-[12px] mb-1">
                  By Narmeen Asghar
                </h2>
                <h1 className="font-inter font-medium text-[#007bff] text-[24px] mb-3">
                  Artificial Intelligence
                </h1>
                <p className="font-inter font-medium text-[#333333] text-[14px] mb-3">
                  Artificial intelligence (AI) is a set of technologies that
                  enable computers to perform a variety of advanced functions,
                  including the ability to see, understand and translate spoken
                  and written language, analyze data, make recommendations, and
                  more.
                </p>
                <div className="flex items-center justify-between">
                  <button className="font-inter text-[18px] font-normal text-[#007bff]">
                    <Link href="/ai">Learn More</Link>
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
          {/* div-2 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-[#7c7c7c73] border-opacity-60 rounded-[4px] overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover rounded-t rounded-[4px] object-center"
                src="/blockchain-vs-Web3.jpg"
                alt="blog"
                width={300}
                height={300}
              />
              <div className="p-6">
                <h2 className="font-inter font-medium text-[#333333] text-[12px] mb-1">
                  By Narmeen Asghar
                </h2>
                <h1 className="font-inter font-medium text-[#007bff] text-[24px] mb-3">
                  Blockchain and Web3
                </h1>
                <p className="font-inter font-medium text-[#333333] text-[14px] mb-3">
                  Blockchain is a decentralized, secure technology that records
                  transactions across multiple computers, ensuring transparency
                  and immutability. Web3 refers to the next generation of the
                  internet, built on blockchain and other decentralized
                  technologies.
                </p>
                <div className="flex items-center justify-between">
                  <button className="font-inter text-[18px] font-normal text-[#007bff]">
                    <Link href="/web3">Learn More</Link>
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
          {/* div-3 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-[#7c7c7c73] border-opacity-60 rounded-[4px] overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover rounded-t rounded-[4px] object-center"
                src="/security.jpeg"
                alt="blog"
                width={300}
                height={300}
              />
              <div className="p-6">
                <h2 className="font-inter font-medium text-[#333333] text-[12px] mb-1">
                  By Narmeen Asghar
                </h2>
                <h1 className="font-inter font-medium text-[#007bff] text-[24px] mb-3">
                  Cyber Security
                </h1>
                <p className="font-inter font-medium text-[#333333] text-[14px] mb-3">
                  Cybersecurity is the practice of protecting systems from
                  digital attacks. These cyberattacks are usually aimed at
                  accessing, changing, or destroying sensitive information or
                  interrupting normal business processes.
                </p>
                <div className="flex items-center justify-between">
                  <button className="font-inter text-[18px] font-normal text-[#007bff]">
                    <Link href="/security">Learn More</Link>
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
      </div>
      {/* sections-2 */}
      <div className="container px-5  mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* div-4 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-[#7c7c7c73] border-opacity-60 rounded-[4px] overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover rounded-t rounded-[4px] object-center"
                src="/IoT.webp"
                alt="blog"
                width={300}
                height={300}
              />
              <div className="p-6">
                <h2 className="font-inter font-medium text-[#333333] text-[12px] mb-1">
                  By Narmeen Asghar
                </h2>
                <h1 className="font-inter font-medium text-[#007bff] text-[24px] mb-3">
                  Internet of Things (IoT)
                </h1>
                <p className="font-inter font-medium text-[#333333] text-[14px] mb-3">
                  The Internet of Things (IoT) refers to a network of physical
                  devices, vehicles, appliances, and other physical objects that
                  are embedded with sensors, software, and network connectivity,
                  allowing them to collect and share data.
                </p>
                <div className="flex items-center justify-between">
                  <button className="font-inter text-[18px] font-normal text-[#007bff]">
                    <Link href="/iot">Learn More</Link>
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
          {/* div-5 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-[#7c7c7c73] border-opacity-60 rounded-[4px] overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover rounded-t rounded-[4px] object-center"
                src="/gadgets-image.png"
                alt="blog"
                width={300}
                height={300}
              />
              <div className="p-6">
                <h2 className="font-inter font-medium text-[#333333] text-[12px] mb-1">
                  By Narmeen Asghar
                </h2>
                <h1 className="font-inter font-medium text-[#007bff] text-[24px] mb-3">
                  Latest Technology Gadgets
                </h1>
                <p className="font-inter font-medium text-[#333333] text-[14px] mb-3">
                  Latest technology gadgets are transforming the way we live,
                  work, and play. From smartwatches that track our health to
                  AI-powered earbuds that adapt to our environment, these
                  gadgets offer convenience, efficiency, and entertainment at
                  our fingertips.
                </p>
                <div className="flex items-center justify-between">
                  <button className="font-inter text-[18px] font-normal text-[#007bff]">
                    <Link href="/gadgets">Learn More</Link>
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
          {/* div-6 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-[#7c7c7c73] border-opacity-60 rounded-[4px] overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover rounded-t rounded-[4px] object-center"
                src="/robotics-image.jpg"
                alt="blog"
                width={300}
                height={300}
              />
              <div className="p-6">
                <h2 className="font-inter font-medium text-[#333333] text-[12px] mb-1">
                  By Narmeen Asghar
                </h2>
                <h1 className="font-inter font-medium text-[#007bff] text-[24px] mb-3">
                  Robotics And Automation
                </h1>
                <p className="font-inter font-medium text-[#333333] text-[14px] mb-3">
                  Robotics and automation are transforming industries by
                  improving efficiency and precision. Robots handle tasks in
                  manufacturing, reducing errors etc. Automation systems, driven
                  by AI, speed up processes in sectors like agriculture and
                  retail.
                </p>
                <div className="flex items-center justify-between">
                  <button className="font-inter text-[18px] font-normal text-[#007bff]">
                    <Link href="/robotics">Learn More</Link>
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
      </div>

      <Commentsection />
    </section>
  );
}

export default page;
