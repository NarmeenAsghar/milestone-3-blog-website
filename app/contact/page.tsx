import React from "react";

function page() {
  return (
    <section className="w-full overflow-hidden relative">
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          title="map"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Pakistan&ie=UTF8&t=&z=5&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-[#ffffff] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="font-inter sm:text-[40px] text-[30px] mb-2 font-medium text-[#007BFF]">
            Contact Information
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Feel free to reach out to me through any of the links below:
          </p>

          {/* Email */}
          <div className="relative mb-4">
            <label className="font-inter text-[18px] font-medium text-[#000000]">Email</label>
            <a
              href="mailto:pakistani47log@gmail.com"
              className="w-full font-inter text-[14px] font-normal text-[#007bff] underline focus:outline-none text-base py-1 px-3"
            >
              pakistani47log@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="relative mb-4">
            <label className="font-inter text-[18px] font-medium text-[#000000]">LinkedIn</label>
            <a
              href="https://www.linkedin.com/in/narmeen-asghar-9582282ba"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full font-inter text-[14px] font-normal text-[#007bff] underline focus:outline-none text-base py-1 px-3"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* GitHub */}
          <div className="relative mb-4">
            <label className="font-inter text-[18px] font-medium text-[#000000]">GitHub</label>
            <a
              href="https://github.com/NarmeenAsghar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full font-inter text-[14px] font-normal text-[#007bff] underline focus:outline-none text-base py-1 px-3"
            >
              GitHub Profile
            </a>
          </div>

          <p className="font-inter text-[16px] font-medium text-[#333333] mt-3">
            Thank you for connecting! Looking forward to hearing from you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default page;
