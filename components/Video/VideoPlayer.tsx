"use client";

import { useState } from "react";

type VideoProp = {
  videoUrl: string;
  thumbnailUrl: string;
};

const VideoPlayer = ({ videoUrl, thumbnailUrl }: VideoProp) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleThumbnailClick = () => {
    setShowVideo(true);
  };

  return (
    <div>
      {!showVideo && !videoLoaded && (
        <img
          src={thumbnailUrl}
          alt="Video Thumbnail"
          onClick={handleThumbnailClick}
        />
      )}
      {showVideo && (
        <video autoPlay muted loop onLoadedData={handleVideoLoad}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
