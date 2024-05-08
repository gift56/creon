import React from "react";

const PassNft = () => {
  const passData = [
    "Pre-launch investment opportunities for upcoming AI projects",
    "Free and early access to Creon built AI projects",
    "Higher allocation limits on the Creon AI Launchpad",
    "Revenue share distribution from Creon built AI projects",
  ];

  return (
    <section id="pass" className="bg-black py-14 lg:py-20">
      <div className="contain">
        <div className="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-between gap-8">
          <div className="w-full lg:flex-1 flex flex-col items-start justify-start gap-8">
            <h2 className="text-white text-3xl md:text-5xl lg:leading-[74.8px] font-normal font-monument uppercase">
              creon pass nft
            </h2>
            <p className="text-xl font-bold font-satoshi bg-clip-text text-transparent bg-textgradient">
              The Creon NFT pass unlocks access to AI projects, the Creon
              launchpad, and a ticket to generate passive income through
              AI-driven tools
            </p>
            <div className="w-full flex flex-col items-start justify-start gap-5">
              {passData.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="w-full lg:flex-1"></div>
        </div>
      </div>
    </section>
  );
};

export default PassNft;
