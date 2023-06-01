import React from "react";

interface ButtonProps {
  onclick?: () => void;
  className?: string;
  text: string;
}

function Button({ onclick, className = "", text }: ButtonProps) {
  const handleClick = onclick ? onclick : () => {};

  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
}

export default Button;
