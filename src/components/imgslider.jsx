import React, { useState, useEffect } from 'react';
import collageimg1 from '../assets/img/collageimg1.webp'
import collageimg2 from '../assets/img/collageimg2.png'
import collageimg4 from '../assets/img/collageimg4.jpeg'
import Courses from './Course';


const images = [
  collageimg1,
  collageimg4,
  
];

const AutoImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollInterval = 3000; // Interval for automatic sliding in milliseconds (3 seconds)

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide (optional)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatic slide change with useEffect
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, autoScrollInterval);
    return () => clearInterval(slideInterval); // Clean up the interval on component unmount
  }, []);

  return (
    <>
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        {/* Image slides */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-full mt-12 mb-5 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        onClick={nextSlide}
      >
        ›
      </button>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
    <Courses/>
    </>

  );
};

export default AutoImageSlider;
