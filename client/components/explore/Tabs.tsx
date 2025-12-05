"use client";

import { useState } from "react";
import EventsTab from "./EventsTab";
import LibraryTab from "./LibraryTab";
import LivestreamsTab from "./LivestreamsTab";

const ExploreTabs = () => {
  const [activeTab, setActiveTab] = useState("events");

  const tabs = [
    { id: "events", label: "Events" },
    { id: "library", label: "Library" },
    { id: "livestreams", label: "Livestreams" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "events":
        return <EventsTab />;
      case "library":
        return <LibraryTab />;
      case "livestreams":
        return <LivestreamsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full mt-6">
      {/* TAB BUTTONS */}
      {/* <div className="flex w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex-1 py-3 text-center font-medium border 
              transition-all duration-200 
              ${
                activeTab === tab.id
                  ? "bg-[#222357] text-white"
                  : "bg-[#E0E0E0] text-[#222357]"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div> */}

      {/* TAB CONTENT */}
      {/* <div className="mt-12">
        {renderContent()}
      </div> */}

      <LibraryTab />
    </div>
  );
};

export default ExploreTabs;
