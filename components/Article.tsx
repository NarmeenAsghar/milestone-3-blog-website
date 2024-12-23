import React from "react";
import Link from "next/link";

function Article() {
  return (
    <section className="w-full overflow-hidden">
      {/* main content */}
      <div className="container mx-auto text-center mb-16">
        <h2 className="font-inter text-[36px] font-medium text-[#007BFF] mb-4">
          Featured Articles
        </h2>
        <p className="font-inter text-[18px] font-normal text-[#333333]">
          Explore our latest and most popular tech articles that are making
          waves in the industry.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-14">
        {/* article-card 1 */}
        <div className="md:w-[370px] sm:w-[400px] w-[350px] p-4">
          <div className="p-6 rounded-[4px] shadow-[#333333] shadow-md hover:bg-[#eeecec91]">
            <h3 className="font-inter text-[20px] text-[#007bff] font-medium mb-2">
              How AI is Changing the Future of Work
            </h3>
            <p className="font-inter text-[16px] text-[#333333] font-normal mb-4">
              Discover how artificial intelligence is revolutionizing industries
              and changing the workforce as we know it.
            </p>
            <button className="font-inter text-[18px] font-normal text-[#007bff]">
            <Link href="/blog">Read More</Link>
            </button>
          </div>
        </div>
        {/* article-card 2 */}
        <div className="md:w-[370px] sm:w-[400px] w-[350px] p-4">
          <div className="p-6 rounded-[4px] shadow-[#333333] shadow-md hover:bg-[#eeecec91]">
            <h3 className="font-inter text-[20px] text-[#007bff] font-medium mb-2">
              Top 5 Gadgets to Watch Out for in 2024
            </h3>
            <p className="font-inter text-[16px] text-[#333333] font-normal mb-4">
              Get an exclusive look at the hottest gadgets coming in 2024 that
              you won`t want to miss!
            </p>
            <button className="font-inter text-[18px] font-normal text-[#007bff]">
            <Link href="/blog">Read More</Link>
            </button>
          </div>
        </div>
        {/* article-card 3 */}
        <div className="md:w-[370px] sm:w-[400px] w-[350px] p-4">
          <div className="p-6 rounded-[4px] shadow-[#333333] shadow-md hover:bg-[#eeecec91]">
            <h3 className="font-inter text-[20px] text-[#007bff] font-medium mb-2">
              Cybersecurity Trends Every Tech Enthusiast Should Know
            </h3>
            <p className="font-inter text-[16px] text-[#333333] font-normal mb-4">
              Learn about the latest cybersecurity trends and how to protect
              yourself from emerging threats.
            </p>
            <button className="font-inter text-[18px] font-normal text-[#007bff]">
            <Link href="/blog">Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Article;
