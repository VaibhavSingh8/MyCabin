import React from "react";

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(
  (
    {
      label,
      type = "text",
      name,
      value,
      onChange,
      error,
      id,
      className = "",
      ...props
    },
    ref
  ) => {
    // Common styles for input
    const inputClassName =
      "px-3 py-2 rounded-md bg-white text-gray-800 outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-200 border border-gray-300 w-3/5";

    return (
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3 mx-auto">
          {label && (
            <label
              className=" inline-block mb-1 pl-1 font-medium text-gray-700"
              htmlFor={id}
            >
              {label}
            </label>
          )}
        </div>

        <div className="md:w-2/3">
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={`${inputClassName} ${className}`}
            id={id}
            ref={ref}
            {...props}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
    );
  }
);

export default Input;
