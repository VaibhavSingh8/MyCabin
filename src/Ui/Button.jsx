import React from "react";

const Button = ({ type = "button", className = "", children, ...props }) => {
  return (
    <button className={`${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
