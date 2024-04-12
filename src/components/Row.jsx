import React from "react";

const Row = ({ type = "vertical", children }) => {
  return (
    <div
      className={`
        flex
        ${
          type === "horizontal"
            ? "justify-between items-center"
            : "flex-col gap-6"
        }
      `}
    >
      {children}
    </div>
  );
};

export default Row;
