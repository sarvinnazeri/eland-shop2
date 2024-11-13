"use client";
import { useState, useEffect } from 'react';

const Carousel2 = ({ imageSrc }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [];
  if (Array.isArray(imageSrc)) {
    for (let i = 0; i < imageSrc.length; i += 5) {
      slides.push(imageSrc.slice(i, i + 5));
    }
  }

  const showSlide = (index) => {
    setCurrentSlide((index + slides.length) % slides.length);
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
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentSlide ? 'active' : 'hidden'}  text-center py-10 px-20 flex`}
        >
          {slide.map((src, i) => (
            <img key={i} src={src} alt={`Slide ${i}`} className='h-[165px] shadow-xl rounded-md mx-2' />
          ))}
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

export default Carousel2;
