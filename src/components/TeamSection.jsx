import React from "react";

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

  return (
    <section className="bg-[#FFF7D1] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-center text-2xl font-bold mb-10">
          Building Uplers Hiring Platform: <span className="text-gray-700">The AI Evolution</span>
        </h2>

        {/* Grid layout to show all items in one line on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.name} className="bg-white p-4 rounded-xl shadow-lg flex flex-col">
              {/* Image Container */}
              <div className="bg-yellow-400 rounded-xl overflow-hidden mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.role}
                </p>
              </div>
              
              {/* Optional Read More Button matching the visual style if needed */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                 <button className="text-sm font-semibold text-brandIndigo hover:underline">
                    Read more
                 </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}