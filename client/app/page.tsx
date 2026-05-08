import ExploreTabs from "@/components/explore/Tabs";
import Hero from "@/components/main/Hero";
import Service from "@/components/main/Service";
// import StatsBar from "@/components/main/StatsBar";
import CardCarousel from "@/components/main/CardCarousel";
import More from "@/components/main/More";
import Blog from "@/components/main/Blog";
import MediaSection from "@/components/main/MediaSection";
import AudioPodcast from "@/components/media/AudioPodcast";

export default function Home() {
  return (
    <div>
      <Hero />
      <Service />
      {/* <StatsBar /> */}
      {/* carousel section */}
      <CardCarousel />
      {/* You can do More */}
      <More />
      {/* blog */}
      <Blog />
      {/* media */}
      <MediaSection />
      <AudioPodcast />
      {/* explore / library */}
      <div className="container mx-auto my-10 px-4">
        <ExploreTabs />
      </div>
    </div>
  );
}