import React from "react";
import { FaLinkedin, FaYoutube, FaTwitter, FaInstagram, FaStar, FaLinkedinIn } from "react-icons/fa";
import UplersBrand from "./UplersBrand";

export default function Footer() {
  return (
    <footer className="bg-[#FFFDF5] text-gray-800 relative mt-16">
      
      {/* Top Yellow Bar */}
      <div className="w-full h-3 bg-[#FCDC3B]"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          
          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            
            {/* Column 1 */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">About</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">How it Works</a></li>
                <li><a href="#" className="hover:text-gray-900">Why Uplers</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Success Stories</a></li>
                <li><a href="#" className="hover:text-gray-900">AI in Recruitment</a></li>
                <li><a href="#" className="hover:text-gray-900">Knowledge Base</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">For Talents</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Find a Job</a></li>
                <li><a href="#" className="hover:text-gray-900">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Why Uplers?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Our Talent Community</a></li>
                <li><a href="#" className="hover:text-gray-900">- Mission Focused</a></li>
                <li><a href="#" className="hover:text-gray-900">Untapped Talent Markets</a></li>
                <li><a href="#" className="hover:text-gray-900">- Browse Talent</a></li>
              </ul>
            </div>
          </div>

          {/* Right Side: Logo & Socials */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            <UplersBrand size="w-32" textSize="text-3xl" />
            
            <div className="flex gap-4">
              <a href="#" className="bg-black text-white p-2 rounded hover:bg-gray-800 transition">
                <FaLinkedinIn className="text-lg" />
              </a>
              <a href="#" className="bg-black text-white p-2 rounded hover:bg-gray-800 transition">
                <FaYoutube className="text-lg" />
              </a>
              <a href="#" className="bg-black text-white p-2 rounded hover:bg-gray-800 transition">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="bg-black text-white p-2 rounded hover:bg-gray-800 transition">
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-10"></div>

        {/* Bottom Section: Contact & Badges */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          
          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <p className="font-bold text-gray-900">+1 618 740 6131</p>
            <p className="text-gray-600">hello@uplers.com</p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            
            {/* LinkedIn Badge */}
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
              <span className="text-[#0077b5] font-bold text-xl">Linked<span className="bg-[#0077b5] text-white px-0.5 rounded ml-0.5">in</span></span>
              <div className="text-sm font-semibold">
                <span className="block text-gray-900">1M+</span>
                <span className="text-gray-500 font-normal">Followers</span>
              </div>
            </div>

            {/* Clutch Badge */}
            <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
              <span className="font-bold text-xl text-gray-900">Clutch</span>
              <div className="flex items-center gap-1">
                <span className="font-bold text-gray-900">4.9</span>
                <FaStar className="text-orange-500" />
              </div>
              <span className="text-sm text-gray-500 font-medium">126 reviews</span>
            </div>

            {/* Google Badge */}
            <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
              <span className="font-bold text-xl text-gray-500"><span className="text-blue-500">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span></span>
              <div className="flex items-center gap-1">
                <span className="font-bold text-gray-900">4.1</span>
                <FaStar className="text-orange-500" />
              </div>
              <span className="text-sm text-gray-500 font-medium">396 reviews</span>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}