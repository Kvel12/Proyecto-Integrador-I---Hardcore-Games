import React, { useEffect, useRef } from "react";

export default function Sound({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.play();
    }
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return <audio ref={audioRef} src={src} />;
}
