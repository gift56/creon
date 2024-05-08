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
          <div
            key={index}
            className="w-[90%] bg-[#13171D99] flex flex-col lg:flex-row  items-start justify-start gap-10 lg:items-center lg:justify-between"
          >
            <div className="flex flex-col px-4 py-5 gap-5">
              <h3 className="text-white text-2xl md:text-[31px] biglaptop:text-4xl lg:leading-[45.8px] font-normal font-monument uppercase">{item.title}</h3>
              <p className="text-lg font-bold font-satoshi text-white">{item.desc}</p>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Market;
