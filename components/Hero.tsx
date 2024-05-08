import VideoPlayer from "./Video/VideoPlayer";

const Hero = () => {
  return (
    <section id="home" className="pt-30 pb-10 relative flex flex-col items-start justify-end h-screen bg-black/50">
      <div className="absolute top-0 w-full h-full overflow-hidden">
        <VideoPlayer
          thumbnailUrl="/images/herothumbnail.png"
          videoUrl="/videos/main-background-video.mp4"
          className="!w-full !h-full !object-contain"
        />
      </div>
      <div className="contain relative z-10 h-[70%] flex flex-col items-start justify-end">
        <h1 className="text-white text-5xl lg:text-[68px] lg:leading-[74.8px] font-normal font-monument">
          The world's first platform for Tokenizing AI blockchain projects
        </h1>
        <p className="text-xl font-bold font-satoshi bg-clip-text text-transparent bg-textgradient">Hold the Creon Pass NFT and earn passive income from AI Tools</p>
      </div>
    </section>
  );
};

export default Hero;
