import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-24">
      
      {/* Background Shapes */}
      <div className="absolute right-0 top-0 h-full w-[380px] hidden md:block">
        <div className="absolute right-0 top-16 w-[350px] h-[350px] bg-yellow-200 rounded-[40%] opacity-90"></div>
        <div className="absolute right-10 top-24 w-[300px] h-[300px] bg-yellow-300 rounded-[40%] opacity-90"></div>
        <div className="absolute right-20 top-32 w-[260px] h-[260px] bg-yellow-400 rounded-[40%] opacity-90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">

        <div className="z-10">

          <p className="inline-block bg-white border shadow px-4 py-2 rounded-full text-gray-600 text-sm mb-6">
            Find, hire & manage your offshore team seamlessly.
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 max-w-xl leading-tight">
            Hire Top Talents quickly<br />with AI & Human Intelligence
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-xl">
            Uplers is an end-to-end AI-hiring platform for tech companies to hire 
            top engineering & marketing talents from India.
          </p>

          {/* Search Bar */}
          <div className="mt-8 bg-white shadow-md rounded-xl flex items-center gap-2 p-3">
            <div className="flex items-center gap-2 border-r pr-3 text-gray-700">
              <span className="font-medium">Location</span>
              <FaChevronDown className="text-xs" />
            </div>

            <input
              type="text"
              placeholder="Keywords / Job title or Company"
              className="flex-1 px-3 py-2 outline-none"
            />

            <button className="px-5 py-3 bg-yellow-400 rounded-lg font-semibold shadow">
              Find a Job
            </button>

            <button className="px-5 py-3 bg-black text-white rounded-lg">
              Drop Resume
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
