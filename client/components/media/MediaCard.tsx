import { Button } from "@/components/ui/button";
import { ShareIcon } from "@/public/icons";
import Image from "next/image";

interface MediaButton {
  label?: string; // text is optional
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
  buttons?: MediaButton[]; // optional
  showShare?: boolean; // optional
}

const MediaCard = ({
  image,
  title,
  author,
  description,
  buttons,
  showShare = true,
}: MediaProps) => {
  return (
    <div className="border rounded-lg bg-white shadow-lg p-4 mx-2 md:mx-0">
      <div className="flex gap-4 items-center">
        {/* LEFT IMAGE */}
        <div className="w-[40%] h-32 relative rounded-md overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
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

          {(buttons?.length || showShare) && (
            <div className="flex justify-between items-center mt-3">
              {/* BUTTONS */}
              <div className="block md:flex md:gap-2 space-y-2 md:space-y-0">
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

              {/* SHARE ICON */}
              {showShare && (
                // <div className="">
                <ShareIcon />
                // </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
