import { tokenData } from "@/constant";
import Image from "next/image";

const Token = () => {
  return (
    <section id="token" className="bg-black py-14 lg:py-20">
      <div className="contain">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-start justify-start gap-6">
          {tokenData.map((item, index) => (
            <div
              key={index}
              className="w-full relative bg-[#13171D99] flex flex-col items-start justify-start gap-4 rounded-md"
            >
              <div className="px-4 md:px-5 py-5 rounded-tr-md rounded-tl-md flex flex-col items-start gap-3">
                <h3 className="text-white text-2xl md:text-[31px] biglaptop:text-4xl lg:leading-[45.8px] font-normal font-monument uppercase">
                  {item.title}
                </h3>
                <p className="text-lg md:text-xl font-bold font-satoshi bg-clip-text text-transparent bg-textgradient">
                  {item.subtitle}
                </p>
              </div>
              <Image src={item.image} alt="token images nft" width={900} height={234} priority />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Token;
