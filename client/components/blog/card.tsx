import Image from "next/image";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  image?: string;
  title: string;
  excerpt: string;
  date: string;
}

export function BlogCard({ image, title, excerpt, date }: BlogCardProps) {
  return (
    <div className="bg-white w-[400px] h-[451px] rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Blog Image */}
      {/* {image && (
        <div className="w-full h-56 relative">
          <Image src="/images/rfc-1.png" alt={title} fill className="object-cover" />
        </div>
      )} */}

      {/* Content */}
      <div className="p-5 text-[#000000] text-left space-y-3">
        <h3 className="text-[20px] text-center  font-bold leading-tight">{title}</h3>
        <p className=" text-sm leading-relaxed">{excerpt}</p>
      </div>

      <div className="px-5 flex justify-between items-center">
        <p className="text-gray-400 text-xs">{date}</p>
        <Button variant="secondary" className="w-fit">Read More</Button>
      </div>
    </div>
  );
}
