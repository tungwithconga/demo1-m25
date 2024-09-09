"use client"
import React, { useState, useEffect } from 'react';

const BannerSlider: React.FC = () => {
  const slides = [
    {
      image: 'https://owen.cdn.vccloud.vn/media/codazon/slideshow/e/n/energy_flow-31.jpg',

    },
    {
      image: 'https://owen.cdn.vccloud.vn/media/codazon/slideshow/a/r/artboard_1-100.jpg',

    },
    {
      image: 'https://owen.cdn.vccloud.vn/media/amasty/blog/Artboard_22_2x-100.jpg',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // 3 giây

    // Dọn dẹp interval khi component bị unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  // Hàm để chuyển slide theo nút điều hướng
  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Hiển thị slide hiện tại */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-[500px] object-cover" />
          <div className="absolute bottom-10 left-10 text-white">
          </div>
        </div>
      ))}

      {/* Nút điều hướng trái */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-3 py-2 rounded-full"
      >
        &lt;
      </button>

      {/* Nút điều hướng phải */}
      <button
        onClick={goToNextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-3 py-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default BannerSlider;
