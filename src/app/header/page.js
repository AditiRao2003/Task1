"use client";
import Image from "next/image";
import React, { useState } from "react";
import ashok from "../Assests/ashoke.png";
import office from "../Assests/officename.png";

const HeaderSection = () => {
  const [language, setLanguage] = useState("हिन्दी");
  return (
    <div className="m-0 p-0">
      <div className="px-5 bg-gray-100 border-2 border-gray-200 shadow-sm">
        <div className="py-2 flex justify-between sm:flex-row items-center sm:justify-between gap-5">
          <div className="flex flex-wrap justify-start sm:justify-start gap-2 sm:gap-5">
            <div className="border-r-[1.5px] border-gray-700 pr-3">
              <p className="xl:text-[12px] lg:text-[12px] md:text-[12px] text-[10px] ">
                भारत सरकार
              </p>
            </div>
            <div className="border-r-[2px] border-gray-700 pr-3">
              <p className="xl:text-[12px] lg:text-[12px] md:text-[12px] text-[10px]">
                रक्षा मंत्रालय
              </p>
            </div>
            <div className="border-r-[2px] border-gray-700 pr-3">
              <p className="xl:text-[12px] lg:text-[12px] md:text-[12px] text-[10px]">
                GOVERNMENT OF INDIA
              </p>
            </div>
            <div>
              <p className="xl:text-[12px] lg:text-[12px] md:text-[12px] text-[10px]">
                MINISTRY OF DEFENCE
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-5">
            <button
              className="xl:text-sm lg:text-sm md:text-sm text-[12px] text-blue-700 font-semibold hover:text-blue-900 hover:underline"
              onClick={() =>
                setLanguage(language === "हिन्दी" ? "English" : "हिन्दी")
              }
            >
              {language}
            </button>
            <p className="xl:text-sm lg:text-sm md:text-sm text-[12px] text-blue-700 font-semibold hover:text-blue-900 hover:underline">
              Skip to Main Content
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:px-5 xl:py-5 lg:px-5 lg:py-5 md:px-5 md:py-5 sm:px-2 sm:py-5 py-2 bg-white gap-8 ">
        <div className="py-2 flex items-center">
          <Image src={ashok} alt="ashoke img" className="xl:h-28 xl:w-20 lg:w-28 lg:h-28 md:h-20 md:w-20 sm:w-16 sm:h-16" />
          <Image src={office} alt="office img" className="xl:h-24 lg:h-24 md:h-24 h-12 py-2 " />
        </div>

        <div className="flex justify-end gap-5 items-center">
          <div className="grid grid-cols-3">
            <Image
              src="/Images/G20Logo.png"
              width={150}
              height={100}
              alt="G20 Logo"
            />
            <Image
              src="/Images/ajadi logo.png"
              width={140}
              height={100}
              alt="G20 Logo"
            />
            <Image
              src="/Images/office logo.png"
              width={150}
              height={100}
              alt="G20 Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
