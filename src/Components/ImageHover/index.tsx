import React, { useState } from "react";

interface ImageHoverProps {
  children?: React.ReactNode;
  className:string;
}

const ImageHover: React.FC<ImageHoverProps> = ({ children,className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const childArray = React.Children.toArray(children);

  return (
    <div
    className={className?className:""}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? childArray[1] : childArray[0]}
    </div>
  );
};

export default ImageHover;
