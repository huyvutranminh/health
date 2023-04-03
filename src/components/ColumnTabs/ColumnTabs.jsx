import React, { useState, useEffect } from "react";
import Button from "../shared/Button";
import ColumnItem from "./components/ColumnItem";

const tabs = [
  {
    label: "RECOMMENDED COLUMN",
    subLabel: "オススメ",
    content: [
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
    ],
  },
  {
    label: "RECOMMENDED DIET",
    subLabel: "ダイエット",
    content: [
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
    ],
  },
  {
    label: "RECOMMENDED BEAUTY",
    subLabel: "美容",
    content: [
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
    ],
  },
  {
    label: "RECOMMENDED HEALTH",
    subLabel: "健康",
    content: [
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
      {
        img: "https://picsum.photos/200",
        date: "22/5",
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtags: "#魚料理  #和食  #DHA",
      },
    ],
  },
];

export const ColumnTabs = ({ tabsEndpoint }) => {
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
    <div className="w-3/4 mx-auto">
      <div className="grid grid-cols-4 gap-8 my-6">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="relative bg-black-custom py-6 px-2 flex flex-col justify-center items-center cursor-pointer"
            onClick={() => setActiveTab(index)}
          >
            <p className="text-2xl text-primary text-center">{tab.label}</p>
            <p className="before:h-[1px] before:w-[56px] before:absolute before:top-0 before:bg-white before:left-1/2 before:-translate-x-1/2 mt-2 pt-2 relative text-white font-thin ">
              {tab.subLabel}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            className={`${activeTab === index ? "block" : "hidden"}`}
          >
            <div className="grid grid-cols-4 gap-2">
              {tab.content.slice(0, visibleItems).map((item, index) => (
                <ColumnItem key={index} item={item} />
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
