"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type VideoProp = {
  videoUrl: string;
  thumbnailUrl: string;
  className: string;
};

const VideoPlayer = ({ videoUrl, thumbnailUrl, className }: VideoProp) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleVideoCanPlay = () => {
      setShowVideo(true);
    };

    videoElement.addEventListener("canplay", handleVideoCanPlay);

    return () => {
      videoElement.removeEventListener("canplay", handleVideoCanPlay);
    };
  }, []);
  const handleThumbnailClick = () => {
    setShowVideo(true);
  };

  return (
    <div className={`${className}`}>
      {!showVideo && (
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
        <video autoPlay muted loop ref={videoRef} className={`${className}`}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
