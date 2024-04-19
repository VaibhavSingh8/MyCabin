import React from "react";
const Button = ({
  type = "submit",
  className = "",
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      className={` font-poppins bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${className}`}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
