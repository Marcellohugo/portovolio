import React from "react";

const videos = [
  "/video/background.mp4",
];

interface VideoTextProps {
  text: string;
}

const VideoText: React.FC<VideoTextProps> = ({ text }) => {
  return (
    <div className="flex justify-center items-center">
      {text.split("").map((char, index) => {
        const clipId = `clip-${index}`;
        return (
          <div key={index} className="relative w-[clamp(6rem,10vw,22rem)] h-[16rem] overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
                  <text
                    x="50%"
                    y="70%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    style={{
                      fontSize: "clamp(8rem, 14vw, 22rem)",
                      fontWeight: "bold",
                    }}
                  >
                    {char}
                  </text>
                </clipPath>
              </defs>
              <foreignObject
                width="clamp(8rem, 14vw, 22rem)"
                height="100%"
                clipPath={`url(#${clipId})`}
              >
                <video
                  className="w-[clamp(6rem,10vw,22rem)] h-[22rem] object-cover"
                  src={videos[index % videos.length]}
                  autoPlay
                  loop
                  muted
                />
              </foreignObject>
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default VideoText;
