import React, { useState } from "react";
import "../Styles/apple.css";
import { FaApple } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";

const Apple = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const dropdownData = {
    Store: [
      {
        subtitle: "shop",
        title: "Shop the Latest",
        links: ["Mac", "iPad", "iPhone", "Apple Watch", "Apple Vision Pro", "Accessories"],
      },
      {
        subtitle: "Quick Links",
        links: [
          "Find a Store",
          "Order Status",
          "Apple Trade In",
          "Financing",
          "Personal Setup",
        ],
      },
      {
        subtitle: "Shop Special Stores",
        links: ["Education", "Business", "Veterans and Military", "Government"],
      },
    ],
    Mac: [
      {
        subtitle: "Explore Mac",
        links: [
          "Explore All Mac",
          "MacBook Air",
          "MacBook Pro",
          "iMac",
          "Mac mini",
          "Mac Studio",
          "Mac Pro",
          "Displays",
        ],
      },
      {
        subtitle: "Shop Mac",
        links: ["Shop Mac", "Help Me Choose", "Mac Accessories", "Apple Trade In", "Financing"],
      },
      {
        subtitle: "More from Mac",
        links: [
          "Mac Support",
          "AppleCare+ for Mac",
          "macOS Sequoia",
          "Apple Intelligence",
          "Apps by Apple",
          "Continuity",
          "iCloud+",
          "Mac For Business",
          "Education",
        ],
      },
    ],
      
      iPad: [
        {
          subtitle: "Explore iPad",
          links: ["Explore All iPad", "iPad Pro", "iPad Air", "iPad", "iPad mini", "Apple Pencil", "Keyboards"],
        },
        {
          subtitle: "Shop iPad",
          links: ["Shop iPad", "iPad Accessories", "Apple Trade In", "Financing"],
        },
        {
          subtitle: "More from iPad",
          links: ["iPad Support", "AppleCare+ for iPad", "iPadOS", "Apple Intelligence", "Apps by Apple", "iCloud+", "Education"],
        },
      ],
      iPhone: [
        {
          subtitle: "Explore iPhone",
          links: ["Explore All iPhone", "iPhone 16 Pro", "iPhone 16", "iPhone 16e", "iPhone 15"],
        },
        {
          subtitle: "Shop iPhone",
          links: ["Shop iPhone", "iPhone Accessories", "Apple Trade In", "Carrier Deals at Apple", "Financing"],
        },
        {
          subtitle: "More from iPhone",
          links: ["iPhone Support", "AppleCare+ for iPhone", "iOS 18","Apple Intelligence", "Apps by Apple", "iCloud+", "Wallet, Pay, Card", "Siri"],
        },
      ],
      Watch: [
        {
          subtitle: "Explore Watch",
          links: ["Explore All Apple Watch", "Apple Watch Series 10", "Apple Watch Ultra 2", "Apple Watch SE", "Apple Watch Nike", "Apple Watch Hermès"],
        },
        {
          subtitle: "Shop Watch",
          links: ["Shop Apple Watch", "Apple Watch Studio", "Apple Watch Bands", "Apple Watch Accessories", "Apple Trade In", "Financing"],
        },
        {
          subtitle: "More from Watch",
          links: ["Apple Watch Support", "AppleCare+", "watchOS 11", "Apple Watch For Your Kids", "Apps by Apple", "Apple Fitness+"],
        },
      ],
      Vision: [
        {
          subtitle: "Explore Vision",
          links: ["Explore Apple Vision Pro", "Guided Tour", "Tech Specs"],
        },
        {
          subtitle: "Shop Vision",
          links: ["Shop Apple Vision Pro", "Apple Vision Pro Accessories", "Book a Demo", "Financing"],
        },
        {
          subtitle: "More from Vision",
          links: ["Apple Vison Pro Support", "AppleCare+", "VisionOS 2"],
        },
      ],
      AirPods: [
        {
          subtitle: "Explore AirPods",
          links: ["Explore All AirPods", "AirPods 4", "AirPods Pro 2", "AirPods Max"],
        },
        {
          subtitle: "Shop AirPods",
          links: ["Shop AirPods", "AirPods Accessories"],
        },
        {
          subtitle: "More from AirPods",
          links: ["AirPods Support", "AppleCare+ For Headphones", "Hearing Health", "Apple Music"],
        },
      ],
      "TV & Home": [
        {
          subtitle: "Explore TV & Home",
          links: ["Explore TV & Home", "Apple TV 4K", "HomePod", "HomePod mini"],
        },
        {
          subtitle: "Shop TV & Home",
          links: ["Shop Apple TV 4K", "Shop HomePod", "Shop HomePod Mini", "Shop Siri Remote", "TV & Home Accessories"],
        },
        {
          subtitle: "More from TV & Home",
          links: ["Apple TV Support", "HomePod Support", "AppleCare+", "Apple TV app", "Apple TV+", "Home App", "Apple Music", "Siri", "AirPlay"],
        },
      ],
      Entertainment: [
        {
          subtitle: "Explore Entertainment",
          links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"],
        },
        {
          subtitle: "Support",
          links: ["Apple TV+ Support", "Apple Music Support"],
        },
      ],
      Accessories: [
        {
          subtitle: "Shop Accessories",
          links: ["Shop All Accessories", "Mac", "iPad", "iPhone", "Apple Watch", "AirPods Vision Pro", "Airpods", "TV & Home"],
        },
        {
          subtitle: "Explore Accessories",
          links: ["Made by Apple", "Beats by Dr. Dre", "AirTag"],
        },
      ],
      Support: [
        {
          subtitle: "Explore Support",
          links: ["iPhone", "Mac", "iPad", "Watch", "Apple Vision Pro", "AirPods", "Music", "TV"],
        },
        {
          subtitle: "Get Help",
          links: ["Community", "Check Coverage", "Repair"],
        },
        {
          subtitle: "Helpful Topics",
          links: ["Get AppleCare+", "Apple Account and Password", "Billing & Subscriptions", "Accessories"],
        }
      ],
 
    
  };

  const menuItems = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  const handleMouseEnter = (item) => {
    setActiveMenu(item);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div
      className={`applewrapper ${activeMenu ? "dropdown-active" : ""}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`appleherosection`}>
        <div
          className={`appleheroiconsection ${
            activeMenu ? "dropdown-active" : ""
          }`}
        >
          <FaApple style={{ fontSize: 20, marginLeft: 40 }} />
          <div className="appleherotext">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="applemenuitem"
                onMouseEnter={() => handleMouseEnter(item)}
              >
                <h5>{item}</h5>
              </div>
            ))}
            <div className="appleherosectionbtn">
              <IoSearchOutline style={{ fontSize: 20, marginRight: 10 }} />
              <BsBag style={{ fontSize: 20, marginLeft: 30 }} />
            </div>
          </div>
        </div>
      </div>

      {activeMenu && (
        <div className={`applefulldropdown ${activeMenu ? "show" : ""}`}>
          <div className="appledropdowncontent">
            <div className="appledropdowncolumns">
              {dropdownData[activeMenu]?.map((section, idx) => (
                <div key={idx} className="appledropdowncolumn">
                  {section.subtitle && <h5>{section.subtitle}</h5>}
                  {section.title && (
                    <h4 className="dropdown-title">{section.title}</h4>
                  )}
                  <ul
                    className={
                      section.subtitle === "Quick Links" ||
                      section.subtitle === "Shop Special Stores" ||
                       section.subtitle === "Shop Mac" ||
                       section.subtitle === "More from Mac" ||
                       section.subtitle === "Shop iPad" ||
                       section.subtitle === "More from iPad" ||
                        section.subtitle === "Shop iPhone" ||
                        section.subtitle === "More from iPhone" ||
                        section.subtitle === "Shop Watch" ||
                        section.subtitle === "More from Watch" ||
                        section.subtitle === "Shop Vision" ||
                        section.subtitle === "More from Vision" ||
                        section.subtitle === "Shop AirPods" ||
                        section.subtitle === "More from AirPods" ||
                        section.subtitle === "Shop TV & Home" ||
                        section.subtitle === "More from TV & Home" ||
                        section.subtitle === "Support" ||
                        section.subtitle === "Explore Accessories" ||
                        section.subtitle === "Get Help" ||
                        section.subtitle === "Helpful Topics" 
                        ? "light-links"
                        : ""
                    }
                  >
                    {section.links.map((link, index) => (
                      <li key={index}>{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apple;
