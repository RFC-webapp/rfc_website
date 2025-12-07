import { Button } from "@/components/ui/button";
import { DownloadIcon, ShareIcon } from "@/public/icons";
import Image from "next/image";

interface BookCardProps {
  image: string;
  title: string;
  author: string;
  description: string;
}

const LibraryCard = ({ image, title, author, description }: BookCardProps) => {
  return (
    <div className="border rounded-lg bg-white shadow-lg p-4">
      <div className="flex gap-4">
        {/* LEFT IMAGE */}
        <div className="w-[40%] h-32 relative rounded-md overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[60%] flex flex-col justify-between text-left">
          <div>
            <h3 className="text-sm font-semibold text-[#222357] leading-tight">
              {title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">by {author}</p>
            <p className="text-xs text-gray-600 mt-2 line-clamp-3">
              {description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-3">
            <Button
              variant="secondary"
              icon={<DownloadIcon />}
              className="text-xs px-3 py-2 bg-[#222357] text-white"
            >
              Download
            </Button>
            <div className="text-[#858C94]">{<ShareIcon />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
