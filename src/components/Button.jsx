import React from "react";
const Button = ({ type = "button", className = "", children, ...props }) => {
  return (
    <button
      className={` font-poppins text-white bg-purple-600 rounded p-3 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
