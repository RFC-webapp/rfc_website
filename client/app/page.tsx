import ExploreTabs from "@/components/explore/Tabs";
import Hero from "@/components/main/Hero";
import Service from "@/components/main/Service";
import CardCarousel from "@/components/main/CardCarousel";
import More from "@/components/main/More";
import Blog from "@/components/main/Blog";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Service />

      {/* carousel section */}
      <CardCarousel />

      {/* You can do More */}
      <More />

      {/* blog */}
      <Blog />

      {/* explore */}
      <div className="container mx-auto my-6">
        <h1 className="font-normal text-[52px] px-2 md:px-0">Library</h1>

        {/* <Tabs defaultValue="library" className="w-full mt-6">
          <TabsList>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="livestreams">Livestreams</TabsTrigger>
          </TabsList>

          <TabsContent value="events">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="library">Change your password here.</TabsContent>
          <TabsContent value="livestreams">
            Change your password here.
          </TabsContent>
        </Tabs> */}

        <ExploreTabs />
      </div>
    </div>
  );
}
