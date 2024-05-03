import React from "react";

const Row = ({ type = "vertical", children, className }) => {
  return (
    <div
      className={`
        flex
        ${
          type === "horizontal"
            ? "justify-between items-center"
            : "flex-col gap-6"
        } ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Row;
