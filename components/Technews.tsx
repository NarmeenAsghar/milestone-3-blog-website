import React from "react";

function Technews() {
  return (
    <section className="w-full overflow-hidden pt-10 pb-10 md:h-screen">
      {/* main content */}
      <div className="mx-auto text-center mb-8 px-4">
        <h2 className="font-inter text-[36px] font-medium text-[#007BFF] mb-4">
          Tech News
        </h2>
        <p className="font-inter text-[18px] font-normal text-[#333333]">
          Stay updated with the latest happenings in the tech world.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4">
        {/* News 1 */}
        <div className="md:w-[370px] sm:w-[400px] w-full p-6 rounded-[4px] shadow-[#333333] shadow-md hover:bg-[#eeecec91] md:h-[330px]">
          <h3 className="font-inter text-[20px] text-[#007bff] font-medium mb-2">
            Cambodian ministry and APLE team up to enhance online safety
            education through a new initiative
          </h3>
          <p className="font-inter text-[16px] text-[#333333] font-normal mt-4">
            A comprehensive evaluation at the end of the three-year period will
            assess the project`s impact, informing future strategies for
            expansion and ensuring its continued relevance in safeguarding
            childrens in the digital age.
          </p>
          <button className="font-inter text-[18px] font-normal text-[#007bff] mt-3">
            Read More
          </button>
        </div>
        {/* News 2 */}
        <div className="md:w-[370px] sm:w-[400px] w-full p-6 rounded-[4px] shadow-[#333333] shadow-md hover:bg-[#eeecec91] md:h-[330px]">
          <h3 className="font-inter text-[20px] text-[#007bff] font-medium mb-2">
            World-first AI camera targets drink-drivers
          </h3>
          <p className="font-inter text-[16px] text-[#333333] font-normal mt-4">
            Motorists under the influence of alcohol or drugs could be caught by
            a pioneering AI camera which is being tested for the first time in
            Devon and Cornwall.The state-of-the-art Heads-Up machine can detect
            road use and behaviour consistent with drivers who may be impaired
            by drink or drugs.
          </p>
          <button className="font-inter text-[18px] font-normal text-[#007bff] mt-4">
            Read More
          </button>
        </div>
        {/* News 3 */}
        <div className="md:w-[370px] sm:w-[400px] w-full p-6 rounded-[4px] shadow-[#333333] shadow-md hover:bg-[#eeecec91] md:h-[330px]">
          <h3 className="font-inter text-[20px] text-[#007bff] font-medium mb-2">
            Hospitals to use AI to cut patient visits
          </h3>
          <p className="font-inter text-[16px] text-[#333333] font-normal mt-4">
            An NHS trust hopes to use (AI) technology to improve a scheme that
            helps patients across Hull and East Yorkshire with chronic
            respiratory illness.The Lenus chronic obstructive pulmonary disease
            (COPD) support system sees patients use an app to keep track of
            their symptoms.
          </p>
          <button className="font-inter text-[18px] font-normal text-[#007bff] mt-4">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Technews;
