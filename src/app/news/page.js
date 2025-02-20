
"use client";
import React, { useState } from "react";

const Newsection = () => {
  const [activeStep, setActiveStep] = useState("About DAD");

  const steps = [
    { id: 1, title: "About DAD" },
    { id: 2, title: "Mission Statement" },
    { id: 3, title: "Quality Policy" },
  ];

  const news = [
    "Implementation of e-HRMS 2.0 in the Defence Accounts Department.",
    "General Election to the Legislative Assembly of NCT of Delhi, 2025 and bye-elections to two Assembly Constituencies each of Tamil Nadu and Uttar Pradesh, 2025 - Paid holiday regarding.",
    "विदेश मंत्रालय, विदेशी विनिमय अनुभाग द्वारा जारी माह 1 दिसम्बर 2024 एवं 1 जनवरी 2025 से प्रभावी विदेशी मुद्रा तथा भारतीय मुद्रा के संशोधित सरकारी विनिमय दरों कि सूचना।",
    "Implementation of e-HRMS 2.0 in the Defence Accounts Department.",
  ];

  const content = {
    "About DAD": "The Defence Accounts Department is committed to render efficient, correct and prompt accounting, payment and financial services leading to customer satisfaction. It is also committed to render efficient audit services to ensure public accountability.",
    "Mission Statement": "We strive to achieve excellence and professionalism in accounting and financial services and in performing audit functions.",
    "Quality Policy": "The Defence Accounts Department is committed to render efficient, correct and prompt accounting, payment and financial services leading to customer satisfaction. It is also committed to render efficient audit services to ensure public accountability."
  };

  return (
    <div className="py-10 xl:px-10 lg:px-10 md:px-5 sm:px-8 px-8">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:xl:grid-cols-2 sm:grid-cols-1 gap-10">
        <div>
          <div className="h-80">
            <div className="border-b-[1px] border-gray-300">
              <div className="bg-[#337ab7] w-28 py-3 px-3 rounded-[5px]">
                <p className="text-[14px] text-white">What's New</p>
              </div>
            </div>
            <div className="border-gray-300 border my-4">
              <div className="px-5 py-3">
                <div className="flex justify-between items-center border-b-[1px] pb-4 border-gray-300">
                  <p className="text-[18px]">What's New</p>
                  <p className="text-[18px] text-blue-600 hover:text-blue-800 cursor-pointer">View All</p>
                </div>
              </div>
              <div className="relative h-48 overflow-hidden group px-5">
                <div className="absolute w-full animate-scroll group-hover:pause-scroll">
                  <ul className="list-disc xl:px-14 lg:px-14 md:px-10 sm:px-8 px-4 space-y-3">
                    {news.map((item, index) => (
                      <li key={index}>
                        <p className="text-[15px]">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 border-b-[1px] border-gray-300 w-full">
              {steps.map((step) => (
                <button
                  key={step.id}
                  className={`text-[15px] text-left px-4 xl:my-0 lg:my-0 md:my-0 sm:my-4 my-3 transition duration-300 ${
                    activeStep === step.title
                      ? "bg-[#337ab7] hover:bg-blue-700 py-3 px-4 rounded-[4px] text-white"
                      : "text-blue-500"
                  }`}
                  onClick={() => setActiveStep(step.title)}
                >
                  {step.title}
                </button>
              ))}
            </div>
            <div className="border-gray-300 border my-4 px-5 pt-10 xl:h-[260px] lg:h-[260px] md:h-[260px] sm:h-[300px] overflow-hidden">
              <h2 className="border-b-[1px] border-gray-200 pb-5 text-2xl">{activeStep}</h2>
              <p className="py-6 text-[15px]">{content[activeStep]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsection;
