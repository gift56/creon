"use client";

import Image from "next/image";
import { useState } from "react";

type VideoProp = {
  videoUrl: string;
  thumbnailUrl: string;
  className: string;
};

const VideoPlayer = ({ videoUrl, thumbnailUrl, className }: VideoProp) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleThumbnailClick = () => {
    setShowVideo(true);
  };

  return (
    <div className={`${className}`}>
      {!showVideo && !videoLoaded && (
        <Image
          src={thumbnailUrl}
          alt="Video Thumbnail"
          onClick={handleThumbnailClick}
          width={1000}
          height={1000}
          className={`${className}`}
          priority
        />
      )}
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          className={`${className}`}
          onCanPlay={() => handleVideoLoad()}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
