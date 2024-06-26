import { tokenData } from "@/constant";
import Image from "next/image";
import { MotionContainer } from "./MotionContainer";

const Token = () => {
  const stagger = 0.25;

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="token" className="bg-black py-14 lg:py-20">
      <div className="contain">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-start justify-start gap-6">
          {tokenData.map((item, index) => (
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
              className="w-full lg:min-h-[659px] relative bg-[#13171D99] flex flex-col items-start justify-start gap-4 rounded-md"
            >
              <span className="bg-white rounded-full py-0.5 px-1 absolute -top-2 select-none right-5 text-black text-xs font-bold font-satoshi uppercase">
                COMING SOON
              </span>
              <div className="px-4 md:px-5 py-5 rounded-tr-md rounded-tl-md flex flex-col items-start gap-3">
                <h3 className="text-white text-2xl md:text-[31px] biglaptop:text-4xl lg:leading-[45.8px] font-normal font-monument uppercase">
                  {item.title}
                </h3>
                <p className="text-lg font-bold font-satoshi bg-clip-text text-transparent bg-textgradient">
                  {item.subtitle}
                </p>
              </div>
              <Image
                src={item.image}
                alt="token images nft"
                width={900}
                height={234}
                priority
              />
              <p className="text-base px-4 md:px-6 font-normal text-white py-4">
                Set to debut in the latter half of 2024, the CREON token serves
                as the pioneering link between cutting-edge AI initiatives and
                blockchain technology. This innovative token provides NFT and
                token holders with unparalleled access to our Launchpad, AI
                tools, and exclusive pre-launch investment prospects.
              </p>
            </MotionContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Token;
