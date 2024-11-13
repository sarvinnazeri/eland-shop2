"use client";
import { useState, useEffect } from 'react';

const Carousel = ({ imageSrc }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    setCurrentSlide((index + (imageSrc?.length || 0)) % (imageSrc?.length || 1));
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  if (!Array.isArray(imageSrc) || imageSrc.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="relative w-3/4 overflow-hidden mx-auto">
      {imageSrc.map((src, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentSlide ? 'active' : 'hidden'} text-white text-center py-10 px-20`}
        >
          <img src={src} alt={`Slide ${index}`} />
        </div>
      ))}

      <button
        className="absolute left-[15px] top-1/2 transform -translate-y-1/2 text-[rgb(248,115,21)] text-[25px] bg-opacity-50 p-2"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute right-[15px] top-1/2 transform -translate-y-1/2 text-[rgb(248,115,21)] text-[25px] bg-opacity-50 p-2"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
