"use client";
import { useState } from "react";
import VideoPlayer from "./Video/VideoPlayer";
import { visionData } from "@/constant";

const Vision = () => {
  const [faqAnswer, setFaqAnswer] = useState<null | number>(null);

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
            {visionData.map((item, index) => (
              <div
                key={index}
                onClick={() => handleToggle(index)}
                className="w-full flex flex-col items-start justify-start py-4 cursor-pointer border-b border-[#13171D]"
              >

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
