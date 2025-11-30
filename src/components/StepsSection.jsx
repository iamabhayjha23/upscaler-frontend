import React from "react";
import { FaRegCommentDots, FaChalkboardTeacher, FaUserCheck, FaUsers } from "react-icons/fa";

export default function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Tell us what you need",
      desc: "We'll get in touch with you to understand your requirements and preferences.",
      btn: "Define",
      icon: <FaRegCommentDots className="text-2xl text-gray-800" />,
    },
    {
      number: "02",
      title: "Meet the top talent",
      desc: "Get 3 to 5 suitable, pre-vetted candidates in 48 hours.",
      btn: "Discover",
      icon: <FaChalkboardTeacher className="text-2xl text-gray-800" />,
    },
    {
      number: "03",
      title: "Meet the top talent",
      desc: "Get 3 to 5 suitable, pre-vetted candidates in 48 hours.",
      btn: "Evaluate",
      icon: <FaUserCheck className="text-2xl text-gray-800" />,
    },
    {
      number: "04",
      title: "Meet the top talent",
      desc: "Get 3 to 5 suitable, pre-vetted candidates in 48 hours.",
      btn: "Onboard",
      icon: <FaUsers className="text-2xl text-gray-800" />,
    },
  ];

  return (
    <section className="py-16 bg-[#FFFDF2]"> {/* Light cream background to match theme */}
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-center text-3xl font-bold mb-16 text-gray-900">
          Hire in <span className="font-extrabold">4 Easy Steps</span>
        </h2>

        <div className="flex flex-col">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col md:flex-row gap-6 md:gap-10 relative pb-12 last:pb-0">
              
              {/* Vertical Line Connector (Absolute) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute left-[22px] top-12 bottom-0 w-px bg-gray-400 h-[calc(100%-20px)]"></div>
              )}

              {/* Number Column */}
              <div className="hidden md:flex flex-col items-center shrink-0 w-12">
                <span className="text-4xl font-light text-gray-800 leading-none">
                  {step.number}
                </span>
              </div>

              {/* Content Row */}
              <div className="flex flex-1 items-start gap-6">
                
                {/* Mobile Number (Visible only on small screens) */}
                <span className="md:hidden text-3xl font-light text-gray-800 mb-2">
                  {step.number}
                </span>

                {/* Icon Circle */}
                <div className="shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#FCDC3B] flex items-center justify-center shadow-sm">
                    {step.icon}
                  </div>
                </div>

                {/* Text & Button Layout */}
                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
                  
                  <div className="max-w-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>

                  {/* Pill Button */}
                  <div>
                    <button className="px-8 py-2 rounded-full border border-gray-400 text-gray-800 font-semibold hover:bg-gray-50 transition-colors text-sm w-fit">
                      {step.btn}
                    </button>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}