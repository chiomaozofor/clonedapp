import React, { useEffect, useState, useCallback } from "react";
import "../styles/Tesla.css";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Tesla = () => {
  const slides = [
    {
      image: "/Images/Tesla-Model3.jpeg",
      title: "Model 3",
      description: "0% APR Available",
    },
    {
      image: "/Images/Tesla-Model5.jpeg",
      title: "Model Y",
      description: "1.99% APR Available",
    },
  ];

  const carouselCars = [
    {
      title: "MODEL Y",
      title2: "Midsize SUV",
      description: "Up to 375 mi Range (EPA est.)",
      definition: "From $37,490 After Federal Tax Credit",
      img: "/public/Images/blacktruck.jpeg",
    },
    {
      title: "Model 3",
      title2: "Sports Sedan",
      description: "Lease From $349/mo With Zero Down",
      img: "/public/Images/silvertruck.jpeg",
    },
    {
      title: "CyberTruck",
      title2: "Utility Truck",
      description: "Lease From $779/mo",
      img: "/public/Images/cybervan.jpeg",
    },
    {
      title: "Model X",
      title2: "Luxury SUV",
      description: "Free supercharging on Inventory",
      img: "/public/Images/bluetruck.jpeg",
    },
    {
      title: "Model S",
      title2: "Luxury Sedan",
      description: "Free supercharging on Inventory",
      img: "/public/Images/redtruck.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="teslaWrapper">
      <div className="teslaheader">
        <h3>T e s l a</h3>
      </div>

      <div
        className="teslaContent"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        <div className="overlayText">
          <h1>{slides[currentIndex].title}</h1>
          <p>{slides[currentIndex].description}</p>

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
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentIndex === idx ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
            ></span>
          ))}
        </div>
      </div>

      <div className="teslahero">
        <div className="teslaherocarousel">
          {carouselCars.map((car, idx) => (
            <div className="carouselCard" key={idx}>
              <div
                className="carouselImage"
                style={{ backgroundImage: `url(${car.img})` }}
              >
                <div className="carouselOverlay">
                  <h3>{car.title2}</h3>
                  <div className="carouselBottomContent">
                    <h2>{car.title}</h2>

                    <p
                      className={
                        [
                          "Model 3",
                          "CyberTruck",
                          "Model X",
                          "Model S",
                        ].includes(car.title)
                          ? "underlined"
                          : ""
                      }
                    >
                      {car.description}
                    </p>
                    <p>{car.definition}</p>
                    <div className="teslacarouselButtons">
                      <button className="teslaorderNow">Order Now</button>
                      <button className="teslalearnMore">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carouselDots">
          {carouselCars.map((_, idx) => (
            <span key={idx} className="carouselDot" />
          ))}
        </div>
      </div>
      <div className="teslaModels">
    <img src="public/Images/Screenshot 2025-05-22 214232.png" alt="" />
      </div>
      <div className="teslamap">
<img src="public/Images/Screenshot 2025-05-22 214825.png" alt="" />
      </div>

    <div className="teslacharge">
     
    </div>
    </div>
  );
};

export default Tesla;
