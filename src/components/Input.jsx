import React, { useId } from "react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  ...props
}) => {
  const id = useId();

  const handleChange = (e) => {
    if (type === "file") {
      onChange(e.target.files[0]);
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        {label && (
          <label
            className="inline-block mb-1 pl-1 font-medium text-gray-700"
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
          onChange={handleChange}
          className={`px-3 py-2 rounded-md bg-white text-gray-800 outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-200 border border-gray-300 w-full ${className}`}
          id={id}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
