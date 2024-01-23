import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return <div className="text-green-700 font-bold text-xl mb-4 ml-8 mt-20">{children}</div>;
};

export default Heading;