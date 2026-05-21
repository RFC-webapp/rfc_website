// components/media/MediaCard.tsx

"use client";

import { Button } from "@/components/ui/button";
import { ShareIcon } from "@/public/icons";
import Image from "next/image";

interface MediaButton {
  label?: string;
  icon?: React.ReactNode;
  variant?: "default" | "ghost" | "outline";
  className?: string;
  onClick?: () => void;
}

interface MediaProps {
  image: string;
  title: string;
  author: string;
  description: string;
  youtubeUrl?: string;
  variant?: "video" | "book";
  buttons?: MediaButton[];
  showShare?: boolean;
}

const MediaCard = ({
 image,
  title,
  author,
  description,
  youtubeUrl = "",
  variant = "video",  
  buttons,
  showShare = true,
}: MediaProps) => {
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title,
        text: description,
        url: youtubeUrl,
      });
    } else {
      await navigator.clipboard.writeText(youtubeUrl);
      alert("Link copied!");
    }
  };

  return (
    <div className="border rounded-2xl bg-white shadow-sm p-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => youtubeUrl && window.open(youtubeUrl, "_blank")}
          className="w-full sm:w-[40%] h-[220px] sm:h-[260px] relative rounded-xl overflow-hidden bg-black shrink-0"
          style={{ cursor: variant === "book" ? "default" : "pointer" }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />

          {variant === "video" && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                <div className="ml-1 border-l-[14px] border-l-white border-y-[10px] border-y-transparent" />
              </div>
            </div>
          )}
        </button>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[#222357] leading-tight">
              {title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              by {author}
            </p>

            <p className="text-sm text-gray-600 mt-3 line-clamp-4">
              {description}
            </p>
          </div>

          {(buttons?.length || showShare) && (
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-5">
              <div className="flex flex-wrap gap-2">
                {buttons?.map((btn, index) => (
                  <Button
                    key={index}
                    variant={btn.variant ?? "default"}
                    icon={btn.icon}
                    className={`text-xs px-3 py-2 ${btn.className ?? ""}`}
                    onClick={btn.onClick}
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>

              {showShare && (
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center"
                >
                  <ShareIcon />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaCard;