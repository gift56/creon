import VideoPlayer from "./Video/VideoPlayer";

const Profit = () => {
  return (
    <section className="bg-black py-14 lg:py-20">
      <div className="contain">
        <div className="w-full flex flex-col items-start gap-3">
          <h3 className="text-white text-3xl md:text-5xl lg:leading-[74.8px] font-normal font-monument uppercase">
            Profiting Through
          </h3>
          <p className="text-xl md:text-2xl lg:text-3xl font-normal font-monument text-end w-full bg-clip-text text-transparent bg-textgradient">
            AI Innovation & Decentralization
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:items-center items-start justify-start lg:justify-between gap-8">
          <div className="w-full lg:flex-1">
            <VideoPlayer
              thumbnailUrl="/images/profitthumbnail.png"
              videoUrl="/videos/creon-logo.mp4"
              className="!w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profit;
