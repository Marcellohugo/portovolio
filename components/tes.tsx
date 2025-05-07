import React from "react";

type Props = {
  color: string;
  text: string;
  textColor?: string;
};

const Section: React.FC<Props> = ({ color, text, textColor = "text-white" }) => {
  return (
    <div
      className={`h-screen ${color} ${textColor} flex items-center justify-center relative z-10`}
    >
      <h2 className="text-4xl font-semibold">{text}</h2>
    </div>
  );
};

export default Section;
