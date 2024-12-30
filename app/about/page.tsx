import React from "react";
import Image from "next/image";

function page() {
  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        {/* image section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src="/about-image.jpg"
            alt="image"
            width={300}
            height={300}
            className="object-cover object-center rounded-full md:ml-10 sm:ml-40"
          />
        </div>

        {/* content section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-16 md:mb-0">
          <h1 className="font-inter sm:text-[40px] text-[30px] mb-4 mt-10 md:mt-0 font-medium text-[#007BFF]">
            About Me
          </h1>
          <h2 className="font-inter text-[24px] text-[#000000] font-medium mb-4">
            Hello! I`m Narmeen Asghar,
          </h2>
          <p className="mb-4 mt-2 font-inter text-[18px] text-[#333333] font-normal">
            A passionate web developer and UI/UX designer with experience in
            building modern, responsive websites using Next.js, HTML, CSS,
            JavaScript, and UI/UX design principles. My expertise lies in
            creating visually appealing, intuitive, and user-friendly web
            applications that offer a seamless user experience.
          </p>
        </div>
      </div>

      {/* expertise section */}
      <div className="py-12 px-6">
        <h2 className="text-center font-inter sm:text-[40px] text-[30px] mb-6 font-medium text-[#007BFF]">
          Expertise
        </h2>
        <p className="text-center font-inter text-[18px] text-[#000000] font-normal mb-10">
          Experts in a variety of fields, delivering top-notch solutions and
          innovative ideas.
        </p>

        {/* Container for the divs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center">
          {/* First Row of Divs */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/web.jpg"
                alt="Expertise Image 1"
                width={200}
                height={200}
                className="object-cover md:ml-12 mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center p-4">
              <p className="font-inter text-[18px] text-[#000000] font-normal text-center md:text-left">
                Expertise in building modern, responsive websites using Next.js,
                HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>

          {/* Second Row of Divs */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/ui-ux.jpg"
                alt="Expertise Image 2"
                width={250}
                height={200}
                className="object-cover mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center p-4">
              <p className="font-inter text-[18px] text-[#000000] font-normal text-center md:text-left">
                Applying UI/UX design principles to create visually appealing,
                intuitive, and user-friendly designs.
              </p>
            </div>
          </div>

          {/* Third Row of Divs */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/responsive_design.webp"
                alt="Expertise Image 3"
                width={500}
                height={300}
                className="object-cover mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center p-4">
              <p className="font-inter text-[18px] text-[#000000] font-normal text-center md:text-left">
                Expertise in creating responsive web designs that work
                seamlessly across different devices and screen sizes.
              </p>
            </div>
          </div>

          {/* Fourth Row of Divs */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/user-experience.png"
                alt="Expertise Image 4"
                width={500}
                height={300}
                className="object-cover mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center p-4">
              <p className="font-inter text-[18px] text-[#000000] font-normal text-center md:text-left">
                Focusing on enhancing user experience by building intuitive,
                user-centered interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
