"use client";

import { useState } from "react";
import Image from "next/image";
import { IoPlay } from "react-icons/io5";

interface YoutubeCardProps {
  title: string;
  videoId: string;
  teacher: string;
}

export default function VideoCard({
  title,
  videoId,
  teacher,
}: YoutubeCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="bg-white rounded-2xl border border-[#EAECF0] shadow-sm overflow-hidden">
      <div className="p-4">
        <h3 className="text-[#222357] text-lg font-semibold">
          {title}
        </h3>

        <p className="text-sm text-[#667085] mt-1">
          Teaching: {teacher}
        </p>
      </div>

      <div className="relative aspect-video bg-black">
        {!isPlaying ? (
          <>
            <Image
              src={thumbnail}
              alt={title}
              fill
              unoptimized
              className="object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }}
            />

            <div className="absolute inset-0 bg-black/20" />

            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-2xl">
                <IoPlay size={38} color="white" />
              </div>
            </button>
          </>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      <div className="flex items-center justify-between p-4">
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF0000] text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          Watch on YouTube
        </a>

        <button
          onClick={() => {
            navigator.share({
              title,
              url: `https://www.youtube.com/watch?v=${videoId}`,
            });
          }}
          className="text-sm text-[#222357] font-medium"
        >
          Share
        </button>
      </div>
    </div>
  );
}