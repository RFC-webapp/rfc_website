"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon, ShareIcon } from "@/public/icons";

interface BookCardProps {
  image: string;
  title: string;
  author: string;
  description: string;
  index?: number;
  visible?: boolean;
}

const LibraryCard = ({
  image,
  title,
  author,
  description,
  index = 0,
  visible = true,
}: BookCardProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 p-4 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease-out ${index * 120}ms, transform 0.7s ease-out ${
          index * 120
        }ms, box-shadow 0.3s, translate 0.3s`,
      }}
    >
      <div className="flex gap-4">
        {/* LEFT - book cover: taller + object-contain so full cover is visible */}
        <div className="w-[38%] h-48 relative rounded-xl overflow-hidden shrink-0 bg-gray-50 border border-gray-100">
          {!imgError ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 40vw, 160px"
              className="object-contain transition-transform duration-500 group-hover:scale-105 p-1"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#222357]/10 to-[#222357]/20 gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#222357"
                strokeWidth="1.5"
                opacity="0.5"
              >
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
              </svg>
              <span className="text-[11px] text-[#222357]/50 font-medium text-center px-2">
                {title.slice(0, 22)}…
              </span>
            </div>
          )}
        </div>

        {/* RIGHT - content */}
        <div className="flex-1 flex flex-col justify-between text-left min-w-0">
          <div>
            <h3 className="text-[13px] font-bold text-[#222357] leading-snug line-clamp-2">
              {title}
            </h3>
            <p className="text-[11px] text-[#F5A623] font-semibold mt-1 uppercase tracking-wide">
              by {author}
            </p>
            <p className="text-[12px] text-gray-500 mt-2 line-clamp-4 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <Button
              variant="secondary"
              icon={<DownloadIcon />}
              className="text-[11px] px-3 py-1.5 h-auto bg-[#222357] text-white hover:bg-[#161722] rounded-lg transition-all duration-200 hover:scale-105"
            >
              Download
            </Button>
            <button className="text-gray-400 hover:text-[#F5A623] transition-colors duration-200 hover:scale-110 transform p-1">
              <ShareIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;