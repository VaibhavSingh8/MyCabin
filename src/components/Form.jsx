import React from "react";

const Form = ({ type, children, onSubmit }) => {
  const formClasses = `overflow-hidden font-poppins font-medium bg-white rounded-md${
    type === "regular"
      ? "p-6 bg-gray-0 border border-gray-100 rounded-md"
      : type === "modal"
      ? "w-[60rem] p-6"
      : ""
  }`;

  return (
    <form onSubmit={onSubmit} className={formClasses}>
      {children}
    </form>
  );
};

export default Form;
