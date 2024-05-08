import VideoPlayer from "./Video/VideoPlayer";

const Profit = () => {
  return (
    <section id="revenue" className="bg-black py-14 lg:py-20">
      <div className="contain">
        <div className="w-full flex flex-col items-start gap-3">
          <h3 className="text-white text-3xl md:text-5xl lg:leading-[74.8px] font-normal font-monument uppercase">
            Profiting Through
          </h3>
          <p className="text-xl md:text-2xl lg:text-3xl font-normal font-monument text-end w-full bg-clip-text text-transparent bg-textgradient uppercase">
            AI Innovation & Decentralization
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:items-center items-start justify-start lg:justify-between gap-8 mt-12">
          <div className="w-full lg:flex-1">
            <VideoPlayer
              thumbnailUrl="/images/profitthumbnail.png"
              videoUrl="/videos/creon-logo.mp4"
              className="!w-full"
            />
          </div>
          <div className="w-full lg:flex-1 flex flex-col items-start justify-start gap-8">
            <h4 className="text-lg md:text-xl font-bold font-satoshi text-white lg:max-w-[391px]">
              The dynamic community driven business model of the future.
            </h4>
            <p className="text-base md:text-lg font-normal font-satoshi text-white lg:max-w-[391px]">
              At Creon, we blend the power of AI tools with the dynamic crypto
              and NFT markets, utilizing an innovative business model to drive
              profitability. This approach empowers our community, as our NFT
              and token holders directly benefit from the growth and prosperity
              of the Creon network, creating a win-win scenario for both our
              community and for the projects we launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profit;
