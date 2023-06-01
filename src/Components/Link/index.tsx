import React, { ReactNode }  from "react";
import { useNavigate } from "react-router-dom";

interface LinkProps {
  className?: string;
  href: string;
  text: string;
  children?: ReactNode;
}

function Link({ className = "", href, text,children }: LinkProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${href}`);
  };

  const linkClassName = className ? className : `link-${href}`;

  return (
    <button className={linkClassName} onClick={handleClick}>
      {!children?text:children}
    </button>
  );
}

export default Link;
