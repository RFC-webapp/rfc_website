import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function More() {
  const rfcSlides = [
    {
      src: "/images/rfc-1.png",
      title: "WELCOME TO RFC",
      subtitle: "ABOUT US",
      button: "LEARN MORE",
    },
    {
      src: "/images/rfc-2.png",
      title: "WE'RE GRATEFUL",
      subtitle: "PARTNER WITH US",
      button: "ROYAL PARTNERS",
    },
    {
      src: "/images/rfc-3.png",
      title: "DISCOVER PURPOSE",
      subtitle: "MISSION WORK",
      button: "START HERE",
    },
  ];

  return (
    <div className="w-full bg-[#222357] flex flex-col items-center my-10 text-white py-12">
      {/* <h5>RFC</h5> */}
      <h3 className="font-bold text-[24px] md:text-[48px]">YOU CAN DO MORE</h3>

      <div className="flex flex-wrap justify-center gap-6 md:gap-0 mt-6">
        {rfcSlides.map((item, index) => (
          <div
            key={index}
            className="relative w-full md:w-[368px] h-[400px] sm:h-[450px] md:h-[515px] mb-6"
          >
            {/* Image */}
            <div className="w-full h-auto">
              <Image
                src={item.src}
                alt={item.title}
                width={368}
                height={515}
                className="w-full h-auto object-cover rounded-lg"
              />

              {/* Text Overlay */}
              <div className="absolute font-bold left-1/2 -translate-x-1/2 top-[60%] text-center px-2">
                <h3 className="text-[12px] sm:text-[14px]">{item.title}</h3>
                <p className="text-[16px] sm:text-[20px] pt-2">
                  {item.subtitle}
                </p>
              </div>

              {/* Button */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                <Button
                  variant="default"
                  size="lg"
                  className="font-medium text-sm sm:text-base"
                >
                  {item.button}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
