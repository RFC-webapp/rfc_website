import Image from "next/image";

const LivestreamsTab = () => {
  return (
    <div>
      <div className="flex justify-evenly">
        <Image
          src="/images/livestream.png"
          alt="Livestream"
          width={406}
          height={568}
          className=""
        />

        <div className="">
          <div className="w-full  max-w-lg aspect-video">
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
          <div>Watch On Youtube</div>
          {/* <div>Watch On Youtube</div>
          <div>Watch On Facebook</div>
          <div>Listen On Mixlr</div> */}
        </div>
      </div>
    </div>
  );
};

export default LivestreamsTab;
