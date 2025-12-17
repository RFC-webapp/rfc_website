// import Program from "@/components/media/Program";
import TitleTag from "@/components/media/TitleTag";
import Selection from "@/components/media/Selection";
import { SearchIcon } from "lucide-react";
import { ServiceIcon } from "@/public/icons";
import VideoCard from "@/components/media/Youtube";
import Chat from "@/components/media/YoutubeChat";
// import SermonExcerpt from "@/components/media/SermonExcerpt";

export default function page() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="container mx-auto pt-14 pb-12">
        {/* <Program /> */}

        <div className="px-2 md:px-0 pt-2">
          <TitleTag text="Livestream" />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2 md:gap-0">
          <div className="flex flex-wrap gap-4 py-4 md:py-8 px-2 md:px-0">
            <Selection icon={<ServiceIcon />} text="Youtube" />
            <Selection icon={<ServiceIcon />} text="Mixlr" />
            <Selection icon={<ServiceIcon />} text="Facebook" />
          </div>

          <div className="relative w-fit md:w-[255px] mx-auto md:mx-0">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#667085]">
              <SearchIcon />
            </div>

            <input
              type="search"
              placeholder="Search"
              className="text-[#667085] bg-[#FFFFFF] w-full h-8 px-12 py-2 rounded-xl border border-[#D0D5DD] focus:outline-none focus:ring-1 focus:ring-[#222357]"
            />
          </div>
        </div>

        <section className="block md:flex justify-between gap-4">
          <VideoCard
            title="The Blessings of Abraham"
            videoId="BUUFI1p2Svs"
            teacher="Rev. Tunde Amosun"
          />

          <Chat />
        </section>

        {/* <SermonExcerpt /> */}
      </div>
    </div>
  );
}
