// app/media/sermons/page.tsx

"use client";

import { useMemo, useState } from "react";
import MediaCard from "@/components/media/MediaCard";
import Program from "@/components/media/Program";
import TitleTag from "@/components/media/TitleTag";
import {
  DownloadIcon,
  MixlrIcon,
  SearchIcon,
  ServiceIcon,
} from "@/public/icons";
import PaginatedContent from "@/components/media/PaginationContent";

const sermons = [
  {
    id: 1,
    image: "https://img.youtube.com/vi/O7sOrE9t3_E/hqdefault.jpg",
    title: "Special Communion Service",
    author: "Tunde Amosun",
    description:
      "Experience powerful worship, teachings and transformation.",
    category: ["1st Service"],
    youtube: "https://youtu.be/O7sOrE9t3_E",
    mixlr: "https://mixlr.com",
  },

  {
    id: 2,
    image: "https://img.youtube.com/vi/x02-X0mXW-A/hqdefault.jpg",
    title: "RFC Sunday 2nd Service",
    author: "Tunde Amosun",
    description:
      "Role Models 2nd Service message and worship experience.",
    category: ["2nd Service"],
    youtube: "https://www.youtube.com/live/x02-X0mXW-A",
    mixlr: "https://mixlr.com",
  },

  {
    id: 3,
    image: "https://img.youtube.com/vi/HJTCpKlYaS4/hqdefault.jpg",
    title: "RFC Sunday 3rd Service",
    author: "Tunde Amosun",
    description:
      "Builders and Conquerors Sunday 3rd service livestream.",
    category: ["3rd Service"],
    youtube: "https://www.youtube.com/live/HJTCpKlYaS4",
    mixlr: "https://mixlr.com",
  },

  {
    id: 4,
    image: "https://img.youtube.com/vi/Kn76RIRFTQs/hqdefault.jpg",
    title: "RFC Worship Experience",
    author: "Tunde Amosun",
    description:
      "Deep worship and encounter moments from Worship Experience.",
    category: ["Worship Experience"],
    youtube: "https://www.youtube.com/live/Kn76RIRFTQs",
    mixlr: "https://mixlr.com",
  },
];

const filters = [
  "All media",
  "1st Service",
  "2nd Service",
  "3rd Service",
  "Worship Experience",
];

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("All media");
  const [search, setSearch] = useState("");

  const filteredSermons = useMemo(() => {
    return sermons.filter((sermon) => {
      const matchesFilter =
        activeFilter === "All media"
          ? true
          : sermon.category.includes(activeFilter);

      const matchesSearch =
        sermon.title.toLowerCase().includes(search.toLowerCase()) ||
        sermon.author.toLowerCase().includes(search.toLowerCase()) ||
        sermon.description.toLowerCase().includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto pt-24 pb-12 px-4">
        <Program />

        <div className="pt-4">
          <TitleTag text="Sermons" />
        </div>

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 mt-6">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`transition-all duration-300 rounded-full border px-5 py-3 text-sm font-medium flex items-center gap-2
                ${
                  activeFilter === filter
                    ? "bg-[#222357] text-white border-[#222357]"
                    : "bg-white text-[#344054] border-[#D0D5DD] hover:border-[#222357]"
                }`}
              >
                {filter !== "All media" && <ServiceIcon />}
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full xl:w-[320px]">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#667085]">
              <SearchIcon />
            </div>

            <input
              type="search"
              placeholder="Search sermons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 rounded-2xl border border-[#D0D5DD] bg-white pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#222357]"
            />
          </div>
        </div>

        <div className="mt-6 mb-4">
          <p className="text-sm text-gray-500">
            Showing {filteredSermons.length} sermon
            {filteredSermons.length !== 1 && "s"}
          </p>
        </div>

        {filteredSermons.length === 0 && (
          <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-10 text-center">
            <h3 className="text-lg font-semibold text-[#222357]">
              No sermons found
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Try another search or filter.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("All media");
              }}
              className="mt-4 bg-[#222357] text-white px-5 py-2 rounded-xl"
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
          {filteredSermons.map((sermon) => (
            <MediaCard
              key={sermon.id}
              image={sermon.image}
              title={sermon.title}
              author={sermon.author}
              description={sermon.description}
              youtubeUrl={sermon.youtube}
              buttons={[
                {
                  label: "Watch on YouTube",
                  icon: <DownloadIcon />,
                  variant: "ghost",
                  className: "bg-[#222357] text-white",
                  onClick: () =>
                    window.open(sermon.youtube, "_blank"),
                },

                {
                  label: "Listen on Mixlr",
                  icon: <MixlrIcon />,
                  variant: "default",
                  className:
                    "bg-[#F59E0B] text-white border-[#F59E0B]",
                  onClick: () =>
                    window.open(sermon.mixlr, "_blank"),
                },
              ]}
            />
          ))}
        </div>
      </div>

      <PaginatedContent />
    </div>
  );
}