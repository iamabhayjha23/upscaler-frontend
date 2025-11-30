import React from "react";
import { FaStar } from "react-icons/fa";

export default function Companies() {
  // Using available icons. 
  // Note: 'airbase' and 'leadsquared' from the image are replaced with available DB/UP icons for now.
  const companies = [
    { name: "HackerRank", logo: "/company-icons/HR.png" },
    { name: "Airbnb", logo: "/company-icons/AB.png" },
    { name: "GitLab", logo: "/company-icons/GL.png" },
    { name: "Dropbox", logo: "/company-icons/DB.png" },
    { name: "Upwork", logo: "/company-icons/UP.png" },
  ];

  const stats = [
    { value: "3 Million+", label: "Talent Network" },
    { value: "1 Million+", label: "Followers Linked in" },
    { value: "Clutch 126+", label: "reviews", stars: true },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Row: Text & Logos */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
          
          {/* Left Text */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 leading-snug">
              Tech leaders trust <br />
              <span className="text-[#FCDC3B]">uplers</span> to quickly <br />
              source qualified talent
            </h3>
          </div>

          {/* Right Logos */}
          <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-8 items-center">
            {companies.map((c) => (
              <img 
                key={c.name} 
                src={c.logo} 
                alt={c.name} 
                className="h-7 md:h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" 
              />
            ))}
          </div>
        </div>

        {/* Bottom Row: Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#1C1C1C] text-white py-6 px-4 rounded-xl flex flex-col items-center justify-center text-center shadow-lg"
            >
              <div className="text-[#FCDC3B] text-2xl font-bold mb-1">
                {stat.value}
              </div>
              
              <div className="text-sm font-medium text-gray-300 flex items-center gap-1">
                {stat.stars && (
                  <div className="flex text-[#FCDC3B] text-xs gap-0.5">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                )}
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}