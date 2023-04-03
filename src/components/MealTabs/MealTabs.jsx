import React, { useState, useEffect } from "react";
import hex from "../../assets/images/hex.svg";
import { ReactComponent as Fork } from "../../assets/icons/icon_knife.svg";
import { ReactComponent as Cup } from "../../assets/icons/icon_cup.svg";
import Button from "../shared/Button";
import MealItem from "./components/MealItem";

const tabs = [
  {
    label: "Morning",
    content: [
      {
        img: "https://picsum.photos/200",
        date: "22/5-morning",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-morning",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-morning",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-morning",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-morning",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-morning",
      },
    ],
  },
  {
    label: "Lunch",
    content: [
      {
        img: "https://picsum.photos/200",
        date: "22/5-lunch",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-lunch",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-lunch",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-lunch",
      },
    ],
  },
  {
    label: "Dinner",
    content: [
      {
        img: "https://picsum.photos/200",
        date: "22/5-dinner",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-dinner",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-dinner",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-dinner",
      },
    ],
  },
  {
    label: "Snack",
    content: [
      {
        img: "https://picsum.photos/200",
        date: "22/5-snack",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-snack",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-snack",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5-snack",
      },
    ],
  },
];

export const MealTabs = ({ tabsEndpoint }) => {
  //   const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  //   useEffect(() => {
  //     const fetchTabs = async () => {
  //       try {
  //         const response = await fetch(tabsEndpoint);
  //         const data = await response.json();
  //         setTabs(data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchTabs();
  //   }, [tabsEndpoint]);

  const loadMoreItems = () => {
    setVisibleItems(visibleItems + 4);
  };

  return (
    <div className="w-full">
      <div className="w-7/12 mx-auto flex justify-center my-6">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`relative cursor-pointer ${
              index !== tabs.length - 1 ? "mr-20" : "mr-0"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <img src={hex} alt="hex" />
            <div className="absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {tab.label === "Snack" ? <Cup /> : <Fork />}
              <p
                className={`${
                  activeTab === index ? "text-orange-600" : "text-white"
                }  `}
              >
                {tab.label}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            className={`${activeTab === index ? "block" : "hidden"}`}
          >
            <div className="w-3/4 mx-auto grid grid-cols-4 gap-2">
              {tab.content.slice(0, visibleItems).map((item, index) => (
                <MealItem key={index} item={item} />
              ))}
            </div>
            {tab.content.length > visibleItems ? (
              <div className="w-full flex justify-center">
                <Button loadMoreItems={loadMoreItems} />
              </div>
            ) : (
              <div className="mb-16"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
