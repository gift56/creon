"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

type VideoProp = {
  videoUrl: string;
  thumbnailUrl: string;
  className: string;
};

const VideoPlayer = ({ videoUrl, thumbnailUrl, className }: VideoProp) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is in view
    triggerOnce: true, // Trigger only once
  });

  useEffect(() => {
    if (inView) {
      setShowVideo(true);
    }
  }, [inView]);

  const handleThumbnailClick = () => {
    setShowVideo(true);
  };

  return (
    <div className={`${className}`} ref={ref}>
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
