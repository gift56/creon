import { marketData } from "@/constant";

const Market = () => {
  return (
    <section
      id="launchpad"
      className="min-h-screen lg:pt-30 pb-10 relative bg-black/50"
    >
      <div className="absolute top-0 w-full h-full">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/videos/roadmap-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-full h-screen bg-[#13171D99] relative top-0 z-10 flex flex-col gap-5 items-center justify-center">
        {marketData.map((item, index) => (
          <div key={index} className="w-[90%]"></div>
        ))}
      </div>
    </section>
  );
};

export default Market;
