"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const SliderSection = () => {
  const slides = [
    "https://cgda.nic.in/imggal/homepage_photo/logo_english.png",
    "https://cgda.nic.in/imggal/homepage_photo/4.JPG",
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className="w-full mx-auto relative group">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="relative min-w-full h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[70vh] flex items-center justify-center text-white text-4xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide})` }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-700/30 via-transparent to-gray-700/30"></div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() =>
              setActiveSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/40 hover:bg-white/60 rounded-full p-3 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/40 hover:bg-white/60 rounded-full p-3 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeSlide === index ? "bg-white" : "bg-white/50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed right-0 xl:top-2/4 lg:top-2/4 md:top-2/4 sm:xl:top-3/4 -translate-y-1/2 flex flex-col z-50">
        <img
          src="https://cgda.nic.in/image/6.png"
          alt=""
          className="h-14 w-14 object-contain transform transition-all duration-300 ease-in-out hover:-translate-x-4"
        />
        <img
          src="https://cgda.nic.in/image/4.png"
          alt=""
          className="h-12 w-12 object-contain transform transition-all duration-300 ease-in-out hover:-translate-x-4"
        />
        <img
          src="https://cgda.nic.in/image/5.png"
          alt=""
          className="h-12 w-12 object-contain transform transition-all duration-300 ease-in-out hover:-translate-x-4"
        />
      </div>

      <button
        onClick={scrollToTop}
        className="bg-red-600 px-3 py-3 rounded-full fixed right-3 bottom-2 flex items-center justify-center z-50 transition-all duration-300 hover:bg-red-800"
      >
        <FaArrowUp className="text-white text-lg" />
      </button>
    </>
  );
};

export default SliderSection;
