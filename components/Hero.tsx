import VideoPlayer from "./Video/VideoPlayer";

const Hero = () => {
  return (
    <section id="home" className="pt-30 pb-10 relative h-[95vh] bg-black/50">
      <div className="absolute top-0 w-full h-full">
        <VideoPlayer
          thumbnailUrl="/images/herothumbnail.png"
          videoUrl="/videos/main-background-video.mp4"
          className="!w-full !h-full !object-contain"
        />
      </div>
      <div className="contain relative z-10 h-full flex flex-col items-start justify-end">
        <h1 className="text-white text-5xl lg:text-[68px] lg:leading-[74.8px] font-normal font-monument">
          The world's first platform for Tokenizing AI blockchain projects
        </h1>
        <p>Hold the Creon Pass NFT and earn passive income from AI Tools</p>
      </div>
    </section>
  );
};

export default Hero;
