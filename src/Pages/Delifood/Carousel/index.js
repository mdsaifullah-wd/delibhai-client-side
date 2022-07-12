import React, { useEffect, useMemo, useState } from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import playstore from '../../../assets/images/playsore.jpg';
import app from '../../../assets/files/delifood-App.apk';
const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  // Slide Data
  const slides = useMemo(
    () => [
      {
        id: 1,
        img: 'https://i.ibb.co/SJydHfP/delifood-banner-1.jpg',
      },
      {
        id: 2,
        img: 'https://i.ibb.co/Hgpzrsp/delifood-banner-2.jpg',
        time: 'ওপেনিং টাইম: সকাল ৯ টা থেকে রাত ১১ টা',
        location: 'কবির চৌধুরী মার্কেট, হেয়াকো বাজার, ভূজপুর, চট্টগ্রাম',
      },
      {
        id: 3,
        ad: 'ডাউনলোড করুন আমাদের মোবাইল এপস্',
        app,
        time: 'ওপেনিং টাইম: সকাল ৯ টা থেকে রাত ১১ টা',
        location: 'কবির চৌধুরী মার্কেট, হেয়াকো বাজার, ভূজপুর, চট্টগ্রাম',
      },
    ],
    []
  );

  // Move Dot Handler
  const moveDot = (index) => {
    setSlideIndex(index);
  };

  // Slide timing
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (slideIndex !== slides.length) {
        setSlideIndex(slideIndex + 1);
      } else {
        setSlideIndex(1);
      }
    }, 2000);
    return () => clearInterval(intervalId);
  }, [slideIndex, slides]);

  return (
    <div className="h-[56vw] lg:max-h-[calc(100vh-175px)] relative overflow-hidden bg-[#010101]">
      {slides.map((slide) => {
        return (
          <div
            key={slide.id}
            className={`${
              slideIndex === slide.id && 'opacity-100'
            } w-full h-full absolute opacity-0 transition-opacity duration-1000 ease-in-out`}
          >
            {slide.img && (
              <img
                src={slide.img}
                className="h-full w-full object-cover"
                alt=""
              />
            )}
            {(slide.ad || slide.app) && (
              <div className="absolute right-0 top-0 left-0 bottom-0 w-full h-full text-[#2BFFCC] pt-[8vw] md:pt-5">
                <div className="container font-noto text-[5.334vw] leading-[5.333vw] md:leading-normal font-bold">
                  <p className="mb-[6vw] md:mb-6">{slide.ad}</p>
                  <img
                    src={playstore}
                    alt=""
                    className="block w-[32.176vw] rounded-[1.99vw]"
                  />
                </div>
              </div>
            )}
            {(slide.time || slide.location) && (
              <div className="absolute right-0 bottom-0 left-0 w-full h-[17.6vw] md:h-36 bg-[#010101] text-white pt-[2.13vw] md:pt-5">
                <div className="container font-noto text-[3.581vw] md:text-3xl font-medium leading-[5.6vw] md:leading-normal">
                  <p className="flex gap-[1.195vw] md:gap-5 items-center">
                    <AiFillClockCircle />
                    <span>{slide.time}</span>
                  </p>
                  <p className="flex gap-[1.195vw] md:gap-6 items-center">
                    <FaMapMarkerAlt />
                    <span>{slide.location}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex">
        {Array.from({ length: slides.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={`${
              slideIndex === index + 1 ? 'bg-[#ffff]' : 'bg-transparent'
            } w-[1.63733vw] md:w-4 h-[1.63733vw] md:h-4 rounded-full border-[0.3276vw] md:border-2 border-[#ffffff] mx-[1.63866vw] md:mx-3 transition-colors duration-1000 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
