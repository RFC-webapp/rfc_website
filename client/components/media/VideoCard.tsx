"use client";

import { useState } from "react";
import Image from "next/image";
import { IoPlay } from "react-icons/io5";

interface VideoCardProps {
  title: string;
  videoId: string;
  teacher: string;
}

export default function VideoCard({
  title,
  videoId,
  teacher,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-4">
      <h3 className="text-[#222357] font-semibold text-lg mb-4">
        {title}
      </h3>

      <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
        {!isPlaying ? (
          <>
            <Image
              src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
              alt={title}
              fill
              unoptimized
              className="object-cover"
            />

            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/20"
            >
              <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-xl">
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

      <div className="flex items-center justify-between mt-4">
        <p className="text-[#222357] font-medium">
          Teaching: {teacher}
        </p>

        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-[#FF0000] text-white px-4 py-2 rounded-lg"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}