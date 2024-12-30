import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="w-full overflow-hidden">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        {/* content section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-inter sm:text-[40px] text-[30px] mb-4 font-medium text-[#007BFF]">
            Discover the Future of Technology
          </h1>
          <h2 className="hidden lg:inline-block font-inter text-[24px] text-[#000000] font-medium">
            Stay Informed with the Latest Innovations
          </h2>
          <p className="mb-4 mt-2 font-inter text-[18px] text-[#333333] font-normal">
            Welcome! Your one-stop destination for the latest updates, expert
            insights, and in-depth reviews on all things technology. From
            cutting-edge gadgets to the future of AI, we cover it all to keep
            you ahead of the curve.
            <br />
            Join us on this exciting journey as we dive deep into the
            innovations that are transforming industries and the way we live.
            Stay updated with our curated content, and be part of the future
            today.
          </p>
        </div>

        {/* image section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src="/main-image.jpg"
            alt="hero"
            width={400}
            height={400}
            className="object-cover object-center rounded-[10px] sm:ml-16 transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
