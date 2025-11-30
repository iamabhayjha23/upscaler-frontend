import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function TeamSection() {
  const team = [
    {
      name: "Reshma Balsoni",
      role: "Helping to simplify complex landscape of hiring Tech Talents.",
      img: "/team/1.png",
    },
    {
      name: "Bhavun Desai",
      role: "AI-driven Uplers Candidate Screening and Hiring.",
      img: "/team/2.png",
    },
    {
      name: "Mehul Patel",
      role: "Enabling global companies to hire top offshore talent.",
      img: "/team/3.png",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + team.length) % team.length);
  const next = () => setIndex((index + 1) % team.length);

  return (
    <section className="bg-[#FFF7D1] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-center text-2xl font-bold mb-8">
          Building Uplers Hiring Platform: <span className="text-gray-700">The AI Evolution</span>
        </h2>

        <div className="relative max-w-xl mx-auto">
          
          <div className="bg-white p-6 rounded-xl shadow-lg relative">

            {/* Image */}
            <img
              src={team[index].img}
              alt={team[index].name}
              className="w-full rounded-xl mb-4"
            />

            {/* Name + Role */}
            <h3 className="font-bold text-gray-900">{team[index].name}</h3>
            <p className="text-gray-600 text-sm">{team[index].role}</p>

            {/* Prev Button */}
            <button
              onClick={prev}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2"
            >
              <FaChevronLeft />
            </button>

            {/* Next Button */}
            <button
              onClick={next}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2"
            >
              <FaChevronRight />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
