import Image from "next/image";

interface CounsellorCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean; // true = image on right on desktop
}

export default function CounsellorCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  reverse = false,
}: CounsellorCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row justify-around items-center gap-x-2 mb-10 ${
        reverse ? "" : "flex-col-reverse md:flex-row" 
      }`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={320}
        quality={100}
        className={`w-full md:w-[500px] h-auto object-cover ${
          reverse ? "" : "order-first md:order-last"
        }`}
      />

      <div
        className={`w-full md:w-1/2 ${
          reverse ? "" : "order-last md:order-first"
        }`}
      >
        <h1 className="font-bold md:text-[32px] text-[20px] font-poppins">{title}</h1>
        <p className="mt-2 text-black/80">{description}</p>
      </div>
    </div>
  );
}
