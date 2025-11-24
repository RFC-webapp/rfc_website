import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WatchIcon } from "@/public/icons";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Image
        priority
        className="w-full h-full object-cover"
        src="/images/home-bg.jpg"
        alt="home background"
        width={1439}
        height={883}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
        <Button
          variant="outline"
          size="sm"
          className="font-normal text-[16px] mb-4"
        >
          Latest Sermon
        </Button>

        <h1 className="text-[24px] md:text-[64px] font-bold mb-2">
          Rock Foundation Church
        </h1>
        <h5 className="text-[12px] md:text-[18px] mb-6">
          Making Mature Followers Of Christ
        </h5>

        <Button variant="default" size="lg" icon={<WatchIcon />} className="">
          Watch Sermon
        </Button>
      </div>
    </div>
  );
}
