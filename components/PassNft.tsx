import { MotionContainer } from "./MotionContainer";
import VideoPlayer from "./Video/VideoPlayer";

const PassNft = () => {
  const passData = [
    "Pre-launch investment opportunities for upcoming AI projects",
    "Free and early access to Creon built AI projects",
    "Higher allocation limits on the Creon AI Launchpad",
    "Revenue share distribution from Creon built AI projects",
  ];

  const stagger = 0.25;

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="pass" className="bg-black py-14 lg:py-20">
      <div className="contain">
        <div className="w-full flex flex-col lg:flex-row lg:items-center items-start justify-start lg:justify-between gap-8">
          <div className="w-full lg:flex-1 flex flex-col items-start justify-start gap-8">
            <MotionContainer
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
            >
              <h2 className="text-white text-3xl md:text-5xl lg:leading-[74.8px] font-normal font-monument uppercase">
                creon pass nft
              </h2>
            </MotionContainer>
            <MotionContainer
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 2 }}
            >
              <p className="text-lg md:text-xl font-bold font-satoshi bg-clip-text text-transparent bg-textgradient">
                The Creon NFT pass unlocks access to AI projects, the Creon
                launchpad, and a ticket to generate passive income through
                AI-driven tools
              </p>
            </MotionContainer>
            <div className="w-full flex flex-col items-start justify-start gap-5">
              {passData.map((item, index) => (
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
                  className="text-base md:text-lg border border-[#13171D] py-2 px-5 rounded-md font-normal text-white"
                >
                  {item}
                </MotionContainer>
              ))}
            </div>
            <MotionContainer
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 2 }}
            >
              <button
                type="button"
                className="bg-textgradient outline-none border-none py-3 px-14 md:px-28 rounded-md text-lg font-bold text-white font-satoshi"
              >
                Buy Creon Pass
              </button>
            </MotionContainer>
          </div>
          <div className="w-full lg:flex-1">
            <VideoPlayer
              thumbnailUrl="/images/passthumbnail.png"
              videoUrl="/videos/nft-video.mp4"
              className="!w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassNft;
