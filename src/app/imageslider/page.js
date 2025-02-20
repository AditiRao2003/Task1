
"use client";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";

const ImageSlider = () => {
  const glideRef = useRef(null);

  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 5,
      autoplay: 3000,
      animationDuration: 900,
      gap: 10,
      classNames: {
        nav: {
          active: "[&>*]:bg-Slate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    });

    slider.mount();
    glideRef.current = slider;

    return () => {
      slider.destroy();
    };
  }, []);

  const handleNext = () => {
    if (glideRef.current) {
      glideRef.current.go(">");
    }
  };

  const handlePrev = () => {
    if (glideRef.current) {
      glideRef.current.go("<");
    }
  };

  return (
    <div>
      <div className="glide-03 relative w-full pb-10 px-10">
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-nowrap flex-no-wrap flex w-full overflow-hidden">
            {[
              "/Images/digital-india.png",
              "/Images/e-gazette.png",
              "/Images/goidirectory.png",
              "/Images/incredible-india.png",
              "/Images/india-gov.png",
              "/Images/makeinindia.png",
              "/Images/myvisit-logo.png",
              "/Images/pg-portal.png",
              
            ].map((src, index) => (
              <div key={index} className="bg-blue-50 rounded-xl">
                <li className="">
                  <img
                    src={src}
                    className="m-auto max-h-60 sm:max-h-72 md:max-h-80 lg:max-h-[400px] object-cover rounded-lg py-8 items-center"
                    alt={`carousel-${index}`}
                  />
                </li>
              </div>
            ))}
          </ul>
        </div>

        
        <button
          onClick={handlePrev}
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

       
        <button
          onClick={handleNext}
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
