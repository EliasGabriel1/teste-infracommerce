import React, { useState } from "react";

interface ImageClickProps {
  children?: React.ReactNode;
  className:string;
}

const ImageClick: React.FC<ImageClickProps> = ({ children,className }) => {
  const [isclicked, setisClicked] = useState(false);

  const handleMouseEnter = () => {
    setisClicked(!isclicked);
  };

  const childArray = React.Children.toArray(children);

  return (
    <div
    className={className?className:""}
      onClick={handleMouseEnter}
    >
      {isclicked ? childArray[1] : childArray[0]}
    </div>
  );
};

export default ImageClick;
