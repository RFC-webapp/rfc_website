import Image from "next/image";
import { MiniBlog } from "../media/MiniBlog";
import { Button } from "../ui/button";

export default function Blog() {
  return (
    <div className="text-center">
      <h4 className="font-medium text-[14px]">READ OUR BLOG</h4>
      <h1 className="font-bold text-[22px] md:text-[38px] pt-3 pb-12">
        SHARE, INSPIRE, INNOVATE
      </h1>

      <div className="mx-auto container gap-5 px-2 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <MiniBlog
          image="/images/blog-1.jpg"
          title="Understanding Faith in Today's World"
          excerpt="Explore how biblical principles shape our daily walk and spiritual growth."
          date="Nov 18, 2025"
        />

        <MiniBlog
          image="/images/blog-2.jpg"
          title="How to Strengthen Your Prayer Life"
          excerpt="Prayer is a lifestyle. Here are practical steps you can take starting today."
          date="Nov 15, 2025"
        />

        <div className="bg-white rounded-xl aspect-420/451 shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden relative">
          <Image
            src="/images/rfc-1.png"
            alt="one"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-4 left-1/4 -translate-x-1/2">
            <Button variant="default" size="lg" className="w-fit">
              VISIT OUR BLOG
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
