"use client";
import { useState } from "react";
import VideoPlayer from "./Video/VideoPlayer";
import { visionData } from "@/constant";
import { IoChevronDown } from "react-icons/io5";
import Image from "next/image";

const Vision = () => {
  const [faqAnswer, setFaqAnswer] = useState<null | number>(0);

  const handleToggle = (key: number) => {
    if (faqAnswer === key) {
      setFaqAnswer(null);
    } else {
      setFaqAnswer(key);
    }
  };
  return (
    <section id="vision">
      <div className="contain">
        <div className="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-between gap-8">
          <div className="w-full lg:flex-1">
            <h3 className="text-white text-2xl md:text-[31px] biglaptop:text-4xl lg:leading-[45.8px] font-normal font-monument uppercase">
              Our vision is to support the innovation of AI blockchain projects
              <span className="font-monument bg-clip-text text-transparent bg-textgradient uppercase">
                {" "}
                while prioritizing communities and democratizing profits
              </span>
            </h3>
            <VideoPlayer
              thumbnailUrl="/images/visionthumbnail.png"
              videoUrl="/videos/creon-logo.mp4"
              className="!w-full"
            />
          </div>
          <div className="w-full lg:flex-1 flex flex-col items-start justify-start">
            {visionData.map((item, i) => (
              <div
                key={i}
                onClick={() => handleToggle(i)}
                className="w-full flex flex-col items-start justify-start py-4 cursor-pointer border-b border-[#13171D]"
              >
                <div className="w-full flex items-center justify-between gap-3">
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      src={item.image}
                      alt="vision icons"
                      width={56}
                      height={62}
                      className=""
                      priority
                    />
                    <h4 className="select-none text-lg md:text-xl font-bold font-satoshi text-white lg:max-w-[391px]">{item.title}</h4>
                  </div>
                  <span className="cursor-pointer">
                    <IoChevronDown
                      className={`${
                        faqAnswer === i ? "rotate-[180deg]" : ""
                      } transition-all duration-200`}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
