"use client";

import React, { useRef } from 'react';
import { useState } from 'react';

const ImageZoom = ({ src, alt }) => {
  const imgRef = useRef(null);
  const [status, setStatus] = useState(false)

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = 'scale(1.2)';
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    img.style.transform = 'scale(1)';
  };
  const click = () => {
    status ? setStatus(false) : setStatus(true)
  }
  const close = () => {
    setStatus(false)
  }

  return (
    <div className='justify-center relative '>
      <div className="overflow-hidden">
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className='object-cover w-[250px] transition-transform duration-300'
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={click}
        />
      </div>
      {status && (
        <div className='w-[300px] md:w-[800px] bg-[white] flex flex-wrap *:w-full absolute border left-[-10%] top-0  '>
          <div className='flex flex-wrap'>
            <span onClick={close} className='cursor-pointer text-black w-full'>
              <img src={'/icon/close.png'} alt="" className='w-[20px]' />
            </span>
            <div className='w-full md:w-[30%] p-2 bg-[rgb(244,244,244)] rounded-md  m-2'>
            </div>

            <figure className='justify-center flex w-full md:w-[65%] h-[300px]  '>
              <img src={src} alt={alt} className='w-[150px] object-contain' />
            </figure>
          </div>
        </div>
      )}
    </div>

  );
};

export default ImageZoom;



