import { marketData } from "@/constant";
import Image from "next/image";
import { MotionContainer } from "./MotionContainer";

const Market = () => {
  const stagger = 0.25;

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="launchpad"
      className="min-h-screen lg:py-20 relative bg-black/50"
    >
      <div className="absolute w-full h-[90%]">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/videos/roadmap-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="contain">
        <div className="w-full relative top-0 z-20 flex flex-col gap-6 items-center justify-center group">
          {marketData.map((item, index) => (
            <MotionContainer
              key={index}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                delay: index * stagger,
                ease: "easeInOut",
                duration: 0.5,
              }}
              className="w-full lg:h-[302px] bg-[#13171D99]  flex flex-col-reverse lg:flex-row items-start justify-start gap-10 lg:items-center lg:justify-between  rounded-md overflow-hidden"
            >
              <div className="flex flex-col px-4 justify-center gap-5 h-full w-full lg:flex-1">
                <h3 className="text-white text-2xl md:text-[31px] biglaptop:text-4xl lg:leading-[45.8px] font-normal font-monument uppercase">
                  {item.title}
                </h3>
                <p className="text-lg font-bold font-satoshi text-white lg:max-w-[907px]">
                  {item.desc}
                </p>
              </div>
              <div className="w-full lg:flex-[0.5]">
                <Image
                  src={item.image}
                  alt="market images"
                  width={453}
                  height={304}
                  priority
                  className="!w-full !h-[304px] rounded-tl-md rounded-tr-md lg:rounded-tl-none lg:rounded-br-md object-cover"
                />
              </div>
            </MotionContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Market;
