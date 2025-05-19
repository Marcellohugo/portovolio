// components/VideoInText.tsx
import React from "react";

const VideoInText = () => {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* VIDEO with mask applied */}
      <svg
        viewBox="0 0 1000 300"
        className="w-full max-w-[90%] h-auto z-10"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask id="video-text-mask" x="0" y="0" width="100%" height="100%">
            {/* Teks putih akan menunjukkan video */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="200"
              fontWeight="bold"
              fontFamily="Arial, sans-serif"
              fill="white"
            >
              Marcello
            </text>
          </mask>
        </defs>

        {/* Elemen video dimasukkan ke dalam SVG sebagai foreignObject */}
        <foreignObject
          x="0"
          y="0"
          width="1000"
          height="300"
          mask="url(#video-text-mask)"
        >
          <video
            className="w-full h-full object-cover"
            src="/video/background.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </foreignObject>
      </svg>
    </div>
  );
};

export default VideoInText;
