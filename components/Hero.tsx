import VideoPlayer from "./Video/VideoPlayer";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen lg:pt-30 relative flex flex-col items-start justify-end bg-black/50">
      <div className="absolute top-0 w-full h-full">
        <VideoPlayer
          thumbnailUrl="/images/herothumbnail.png"
          videoUrl="/videos/main-background-video.mp4"
          className="!w-full !h-full"
        />
      </div>
      <div className="contain relative z-10 h-[70%] flex flex-col gap-5 lg:gap-0 items-start justify-end">
        <h1 className="text-white text-3xl md:text-5xl lg:text-[68px] lg:leading-[74.8px] font-normal font-monument">
          The world's first platform for Tokenizing AI blockchain projects
        </h1>
        <p className="text-xl font-bold font-satoshi bg-clip-text text-transparent bg-textgradient">Hold the Creon Pass NFT and earn passive income from AI Tools</p>
      </div>
    </section>
  );
};

export default Hero;
