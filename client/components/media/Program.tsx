"use client";

import { useState } from "react";

export default function Program() {
  const [activeTab, setActiveTab] = useState<"past" | "live">("past");

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-full shadow-md p-2 flex items-center text-[14px] font-semibold text-[#222357]">
      <div
        className={`flex-1 text-center py-2 rounded-full cursor-pointer ${
          activeTab === "past" ? "bg-[#22235733]" : "text-[#22235780]"
        }`}
        onClick={() => setActiveTab("past")}
      >
        Past Program
      </div>

      <div
        className={`flex-1 text-center py-2 rounded-full cursor-pointer ${
          activeTab === "live" ? "bg-[#22235733]" : "text-[#22235780]"
        }`}
        onClick={() => setActiveTab("live")}
      >
        Live Programs
      </div>
    </div>
  );
}
