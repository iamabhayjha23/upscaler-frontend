import React from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 bg-[#FFFDF5] overflow-hidden">
      
      {/* Background Blob Image */}
      {/* Make sure to place your image file as 'public/blob.png' */}
      <div className="absolute right-0 top-0 hidden md:block pointer-events-none h-full w-[55%] z-0">
        <img 
          src="/blob.png" 
          alt="Background Blob" 
          className="w-full h-full object-contain object-right-top"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10">

        <div className="flex flex-col items-center w-full max-w-4xl">

          {/* Centered Pill */}
          <div className="inline-block bg-white border border-gray-100 shadow-sm px-5 py-2 rounded-lg mb-8">
            <span className="text-gray-600 text-sm font-medium">
              Find, hire & manage your offshore team seamlessly.
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-[56px] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
            Hire Top Talents quickly <br className="hidden md:block" /> 
            with AI & Human Intelligence
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-[17px] max-w-2xl leading-relaxed mb-10 font-normal">
            Uplers is an end-to-end AI-hiring platform for tech companies to hire 
            top engineering & marketing talents from India.
          </p>

          {/* Search Bar */}
          <div className="bg-white p-2 rounded-full shadow-lg border border-gray-100 flex flex-col md:flex-row items-center w-full max-w-3xl">
            
            {/* Location Dropdown */}
            <div className="flex items-center gap-2 px-5 py-3 border-b md:border-b-0 md:border-r border-gray-200 w-full md:w-auto min-w-[140px] cursor-pointer text-gray-500 hover:text-gray-700 transition-colors">
              <HiOutlineLocationMarker className="text-lg" />
              <span className="font-medium text-sm">Location</span>
              <FaChevronDown className="text-[10px] ml-auto" />
            </div>

            {/* Search Input */}
            <div className="flex-1 w-full flex items-center px-4 py-2">
              <FaSearch className="text-gray-400 text-sm mr-3" />
              <input
                type="text"
                placeholder="Keywords / Job title or Company"
                className="w-full outline-none text-gray-700 placeholder-gray-400 text-sm bg-transparent h-full"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 p-1 w-full md:w-auto">
                <button className="flex-1 md:flex-none px-6 py-2.5 bg-[#FCDC3B] text-gray-900 text-sm font-bold rounded-full hover:bg-yellow-400 transition-colors whitespace-nowrap shadow-sm">
                  Find a Job
                </button>

                <button className="flex-1 md:flex-none px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap shadow-sm">
                  Drop Resume
                </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}