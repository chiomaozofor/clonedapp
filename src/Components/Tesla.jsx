import React, { useEffect, useState, useRef, useCallback } from "react";
import "../styles/Tesla.css";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Tesla = () => {
  const slides = [
    {
      image: "/Images/model3desktop.avif",
      title: "Model 3",
      description: "0% APR Available",
    },
    {
      image: "/Images/modelydesktop.avif",
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
      img: "/Images/Homepage-Card-Model-Y-Desktop.avif",
    },
    {
      title: "Model 3",
      title2: "Sports Sedan",
      description: "Lease From $349/mo With Zero Down",
      img: "/Images/Homepage-Card-Model-3-Desktop.avif",
    },
    {
      title: "CyberTruck",
      title2: "Utility Truck",
      description: "Lease From $779/mo",
      img: "/Images/Homepage-Card-Cybertruck-Desktop.avif",
    },
    {
      title: "Model X",
      title2: "Luxury SUV",
      description: "Free supercharging on Inventory",
      img: "/Images/Homepage-Card-Model-X-Desktop.avif",
    },
    {
      title: "Model S",
      title2: "Luxury Sedan",
      description: "Free supercharging on Inventory",
      img: "/Images/Homepage-Card-Model-S-Desktop.avif",
    },
  ];

  const panelData = [
    {
      title: "Solar Panels",
      description: "Use Solar Energy to Power Your Home and Charge Your Tesla",
      image: "/Images/solarpanelhome.avif",
    },
    {
      title: "Powerwall",
      description: "Keep Your Lights On During Outages",
      image: "/Images/Powerwall-Desktop.avif",
    },
    {
      title: "Solar Roof",
      description: "Generate Clean Energy With Your Roof",
      image: "/Images/Solar-Roof-Desktop.avif",
    },
    {
      title: "Megapack",
      description: "Massive Batteries for Massive Energy Support",
      image: "/Images/Megapack-Desktop.avif",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePanel, setActivePanel] = useState(0);
  const panelCarouselRef = useRef(null);

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

  const scrollToPanel = (index) => {
    const scrollContainer = panelCarouselRef.current;
    const panelWidth = scrollContainer.offsetWidth;
    scrollContainer.scrollTo({ left: panelWidth * index, behavior: "smooth" });
    setActivePanel(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="teslaWrapper">
      <div className="teslaheader">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 342 35"
          width="120"
          height="20"
          fill="currentColor"
        >
          <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7" />
        </svg>
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
            <button className="teslaButton viewinventory">
              View Inventory
            </button>
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
            />
          ))}
        </div>
      </div>

      <div className="teslahero">
        <div className="teslaherocarousel" ref={panelCarouselRef}>
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
                    {car.definition && <p>{car.definition}</p>}
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
          {panelData.map((_, idx) => (
            <span
              key={idx}
              className={`carouselDot ${activePanel === idx ? "active" : ""}`}
              onClick={() => scrollToPanel(idx)}
            />
          ))}
        </div>
      </div>

      <div className="teslaModels">
        <img src="/Images/Screenshot 2025-05-22 214232.png" alt="Models" />
      </div>
      <div className="teslamap">
        <img src="/Images/Screenshot 2025-05-22 214825.png" alt="Map" />
      </div>

      <div className="teslacharge">
        <div className="teslachargeContent">
          <h2 className="teslachargetext">Find Your Charge</h2>
          <p className="teslanetwork">
            View the network of Tesla Superchargers and Destination Chargers
            available near you.
          </p>
          <div className="teslachargeButtons">
            <button className="viewNetwork">View Network</button>
            <button className="learnMore">Learn More</button>
          </div>
        </div>

        <div className="teslachargerStats">
          <div className="chargerStat">
            <div className="statTop">
              <h2 className="statNumber">30,658</h2>
              <svg
                className="statIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 20"
                fill="#fa314a"
              >
                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
              </svg>
            </div>
            <p className="statLabel">Superchargers</p>
          </div>

          <div className="chargerStat">
            <div className="statTop">
              <h2 className="statNumber">10,349</h2>
              <svg
                className="statIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 20"
                fill="#999999"
              >
                <path d="M7 22v-6h10v6h2v-7c0-1.1-.9-2-2-2h-1v-2h1c1.66 0 3-1.34 3-3V4a1 1 0 0 0-2 0v4h-2V4a1 1 0 0 0-2 0v4h-2V4a1 1 0 0 0-2 0v4H8V4a1 1 0 0 0-2 0v4c0 1.66 1.34 3 3 3h1v2H9c-1.1 0-2 .9-2 2v7h2z" />
              </svg>
            </div>
            <p className="statLabel">Destination Chargers</p>
          </div>
        </div>
      </div>

      <div className="tesla-panels-wrapper">
        <div className="tesla-panels-scroll" ref={panelCarouselRef}>
          {panelData.map((panel, idx) => (
            <div className="panel-card" key={idx}>
              <div
                className="panel-image"
                style={{ backgroundImage: `url(${panel.image})` }}
              >
                <div className="panel-overlay">
                  <h3>{panel.title}</h3>
                  <p>{panel.description}</p>
                  <div className="panel-buttons">
                    <button className="teslaorderNow">Order Now</button>
                    <button className="teslalearnMore">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carouselDots">
          {panelData.map((_, idx) => (
            <span
              key={idx}
              className={`carouselDot ${activePanel === idx ? "active" : ""}`}
              onClick={() => scrollToPanel(idx)}
            />
          ))}
        </div>
      </div>
      <div className="tesla-footer">
        <div className="tesla-footer-content">
          <h5> 1 For Long-Range Rear-Wheel Drive models with 19" wheels. </h5>
          <p>
            {" "}
            2 Before the Federal Tax Credit, Model Y Long Range Rear-Wheel Drive
            starts at $46,630. Price includes Destination and Order Fees but
            exclude taxes and other fees. Subject to change.  Vehicle <br /> shown has
            upgrades that will increase the price. The $7,500 Federal Tax Credit
            is available to eligible buyers and subject to MSRP caps. Not all
            vehicles, customers or finance options will be <br /> eligible.Before the
            Federal Tax Credit, Model Y Long Range Rear-Wheel Drive starts at
            $46,630. Price includes Destination and Order Fees but exclude taxes
            and other fees. Subject to change. <br /> Vehicle shown has upgrades that
            will increase the price. The $7,500 Federal Tax Credit is available
            to eligible buyers and subject to MSRP caps. Not all vehicles,
            customers or finance options will be <br /> eligible.  <span className="underline">Terms apply.</span>
          </p>
        <div className="teslasubfooter">
  <p>
    <span>Tesla © 2025</span>
    <span>Privacy & Legal</span>
    <span>Vehicle Recalls</span>
    <span>Contact</span>
    <span>News</span>
    <span>Get Updates</span>
    <span>Locations</span>
    <span>Learn</span>
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

export default Tesla;
