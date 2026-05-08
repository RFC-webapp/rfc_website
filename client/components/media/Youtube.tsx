"use client";

import { useState } from "react";
import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

interface VideoCardProps {
  title: string;
  videoId: string; // YouTube video ID
  teacher: string;
}

export default function VideoCard({ title, videoId, teacher }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-[#EEF0F3] rounded-xl p-4 w-full max-w-4xl">
      <h3 className="text-[#222357] font-medium text-[16px] my-2 uppercase font-inter">
        {title}
      </h3>

      {/* Video Container */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-300">
        {!isPlaying ? (
          <>
            {/* Thumbnail */}
            <Image
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              fill
              className="object-cover"
            />

            {/* Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-[#1E1E50] rounded-full flex items-center justify-center shadow-lg">
                <IoPlayOutline color="white" size={30} />
              </div>
            </button>
          </>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>

      <p className="mt-3 font-medium text-[16px] font-inter text-[#222357]">Teaching: {teacher}</p>
    </div>
  );
}
