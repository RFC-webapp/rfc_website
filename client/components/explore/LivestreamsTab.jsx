import Image from "next/image";

const LivestreamsTab = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4">
        {/* Poster image — hidden on small screens to save space */}
        <div className="hidden md:block relative w-full max-w-[280px] lg:max-w-[360px] aspect-[406/568] shrink-0">
          <Image
            src="/images/livestream.png"
            alt="Livestream"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-full max-w-xl flex flex-col gap-4">
          <div className="w-full aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/yK8plIwwUrg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
          <p className="text-sm font-semibold text-[#222357]">Watch On Youtube</p>
        </div>
      </div>
    </div>
  );
};

export default LivestreamsTab;