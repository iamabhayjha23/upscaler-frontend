import React from "react";
import { 
  CodeBracketIcon, 
  CircleStackIcon, 
  CogIcon, 
  ArrowPathIcon, 
  PuzzlePieceIcon 
} from '@heroicons/react/24/outline';

export default function Categories() {
  const cats = [
    { title: "Software Engineers", icon: <CodeBracketIcon className="w-9 h-9" />, active: true },
    { title: "Data Engineers", icon: <CircleStackIcon className="w-9 h-9" />, active: false },
    { title: "ML Engineers", icon: <CogIcon className="w-9 h-9" />, active: false },
    { title: "DevOps", icon: <ArrowPathIcon className="w-9 h-9" />, active: false },
    { title: "Solutions Architect", icon: <PuzzlePieceIcon className="w-9 h-9" />, active: false },
  ];

  return (
    <section className="bg-[#FFFDF5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
          Browse by category
        </h2>
        
        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {cats.map((c) => (
            <div 
              key={c.title} 
              className={`
                flex flex-col items-center justify-center p-4 rounded-xl border w-44 h-40 text-center transition-all cursor-pointer shadow-sm
                ${c.active 
                  ? "bg-[#FCDC3B] border-[#FCDC3B] text-gray-900" 
                  : "bg-white border-gray-300 text-gray-600 hover:border-gray-400 hover:shadow-md"
                }
              `}
            >
              <div className="mb-4">
                {c.icon}
              </div>
              <div className="text-sm font-semibold leading-tight px-2">
                {c.title}
              </div>
            </div>
          ))}
        </div>

        {/* Browse More Button */}
        <div className="text-center">
          <button className="px-8 py-2.5 bg-[#FCDC3B] text-gray-900 font-bold rounded-full shadow-sm hover:bg-yellow-400 transition-colors text-sm">
            Browse more
          </button>
        </div>

      </div>
    </section>
  );
}