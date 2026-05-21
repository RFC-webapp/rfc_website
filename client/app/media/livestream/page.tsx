"use client";

import { useMemo, useState } from "react";
import TitleTag from "@/components/media/TitleTag";
import Selection from "@/components/media/Selection";
import { SearchIcon } from "lucide-react";
import { ServiceIcon } from "@/public/icons";
import YoutubeCard from "@/components/media/YoutubeCard";
import GroupChat from "@/components/media/YoutubeChat";
import VideoCard from "@/components/media/YoutubeCard";

const livestreams = [
  {
    id: 1,
    title: "RFC Worship Experience",
    videoId: "Kn76RIRFTQs",
    teacher: "Rev. Tunde Amosun",
    platform: "Youtube",
  },

  {
    id: 2,
    title: "RFC Sunday 2nd Service",
    videoId: "x02-X0mXW-A",
    teacher: "Rev. Tunde Amosun",
    platform: "Youtube",
  },

  {
    id: 3,
    title: "Special Communion Service",
    videoId: "O7sOrE9t3_E",
    teacher: "Rev. Tunde Amosun",
    platform: "Youtube",
  },

  {
    id: 4,
    title: "RFC Sunday 3rd Service",
    videoId: "HJTCpKlYaS4",
    teacher: "Rev. Tunde Amosun",
    platform: "Youtube",
  },

  {
    id: 5,
    title: "The Blessings of Abraham",
    videoId: "AcBATqsQCHc",
    teacher: "Rev. Tunde Amosun",
    platform: "Youtube",
  },
];

const filters = ["All", "Youtube", "Mixlr", "Facebook"];

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredVideos = useMemo(() => {
    return livestreams.filter((video) => {
      const matchesFilter =
        activeFilter === "All"
          ? true
          : video.platform === activeFilter;

      const matchesSearch =
        video.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        video.teacher
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto pt-20 pb-12 px-4">
        <div className="pt-2">
          <TitleTag text="Livestream" />
        </div>

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mt-6">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 text-sm font-medium
                  
                  ${
                    activeFilter === filter
                      ? "bg-[#222357] text-white border-[#222357]"
                      : "bg-white text-[#344054] border-[#D0D5DD]"
                  }
                `}
              >
                {filter !== "All" && <ServiceIcon />}
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full xl:w-[320px]">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#667085]">
              <SearchIcon size={18} />
            </div>

            <input
              type="search"
              placeholder="Search livestream..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 rounded-2xl border border-[#D0D5DD] bg-white pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#222357]"
            />
          </div>
        </div>

        <div className="mt-6 mb-4">
          <p className="text-sm text-gray-500">
            Showing {filteredVideos.length} livestream
            {filteredVideos.length !== 1 && "s"}
          </p>
        </div>

        {filteredVideos.length === 0 && (
          <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-10 text-center">
            <h3 className="text-lg font-semibold text-[#222357]">
              No livestream found
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Try another search or filter.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-[#222357] text-white"
            >
              Clear Filters
            </button>
          </div>
        )}

        <section className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6 mt-8">
          <div className="grid grid-cols-1 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                videoId={video.videoId}
                teacher={video.teacher}
              />
            ))}
          </div>

          <div className="sticky top-24 h-fit">
            <GroupChat />
          </div>
        </section>
      </div>
    </div>
  );
}