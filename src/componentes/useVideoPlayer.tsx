// hooks/useVideoPlayer.ts
import { useState } from "react";

export const useVideoPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const playVideo = (url: string) => {
    setCurrentVideo(url);
  };

  const stopVideo = () => {
    setCurrentVideo(null);
  };

  return {
    currentVideo,
    playVideo,
    stopVideo,
  };
};
