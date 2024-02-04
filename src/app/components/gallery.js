"use client";
import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Gallery = () => {
  const totalImages = 40;
  const imagesPerPage = 12;

  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleImages, setVisibleImages] = useState(imagesPerPage);
  const [transitionClass, setTransitionClass] = useState("");

  const images = Array.from({ length: 40 }, (_, index) => `Image_${String(index + 1).padStart(3, '0')}.jpg`);

  const handleToggle = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  useEffect(() => {
    setTransitionClass("transition-opacity duration-500");
    if (isExpanded) {
      setVisibleImages(totalImages);
    } else {
      setVisibleImages(imagesPerPage);
    }
    // Reset transition class after the transition is complete
    const timeoutId = setTimeout(() => setTransitionClass(""), 500);
    return () => clearTimeout(timeoutId);
  }, [isExpanded]);

  return (
    <div id="gallery" className='relative isolate mx-auto max-w-7xl px-6 py-14 sm:px-6 sm:py-20 lg:px-8 '>
      <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
        <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#58bdbd] to-[#58bdbd]" style={{
          clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
        <div className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#58bdbd] to-[#58bdbd] xl:ml-0 xl:mr-[calc(50%-12rem)]" style={{
          clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}>
        </div>
      </div>

      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#217272] font_poppins">
          Gallery
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font_poppins">
          Our Visual Journey with Happy Clients
        </p>
      </div>

      <div id="galleryCollection" className={`container-fluid mt-14 ${transitionClass}`}>
        {images.slice(0, visibleImages).map((image, index) => (
          <Image
            key={index}
            src={`/assets/gallery/${image}`}
            alt={`Image ${index + 1}`}
            className="gallery-image"
            width={500}
            height={500}
          />
        ))}
      </div>

      <div className="text-center mt-4 flex justify-center">
        <button
          onClick={handleToggle}
          className="text-[#217272] font-semibold py-2 px-4 rounded flex items-center gap-2"
        >
          {isExpanded ? "Show Less" : "Show More"}
          <ChevronDownIcon className={`h-4 w-4 ${isExpanded ? 'rotate-180' : ''}`} aria-hidden="true" style={{ strokeWidth: '3' }} />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
