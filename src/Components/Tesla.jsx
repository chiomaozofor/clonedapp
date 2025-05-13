import React, { useEffect, useState } from "react";
import "../styles/Tesla.css";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Tesla = () => {
  const backgroundImages = [
    "/public/Images/Tesla-Model3.jpeg",
    "/public/Images/Tesla-ModelY.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [backgroundImages.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="teslaWrapper">
      <div className="teslaheader">
        <h3>T e s l a</h3>
      </div>

      <div
        className="teslaContent"
        style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
      >
        <div className="overlayText">
          <h1>Model Y</h1>
          <p>1.99% APR Available</p>
          <div className="teslaButtons">
  <button className="teslaButton orderNow">Order Now</button>
  <button className="teslaButton learnMore">Learn More</button>
</div>

        </div>

        <div className="arrow left" onClick={prevSlide}>
        <MdOutlineKeyboardArrowLeft />
        </div>
        <div className="arrow right" onClick={nextSlide}>
        <MdKeyboardArrowRight />
        </div>

        <div className="dots">
          {backgroundImages.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentIndex === idx ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tesla;
