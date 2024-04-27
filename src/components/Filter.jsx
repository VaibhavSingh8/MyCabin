import React from "react";
import { useSearchParams } from "react-router-dom";

const StyledFilter = ({ children }) => {
  return (
    <div className="flex items-center gap-1 border border-gray-200 bg-white rounded-md shadow-sm p-1 ">
      {children}
    </div>
  );
};

const FilterButton = ({ active, children, ...props }) => {
  const buttonClasses = `border-none rounded-md text-base px-2 py-1 transition-colors font-poppins font-normal ${
    active
      ? "bg-indigo-500 text-indigo-50"
      : "hover:bg-indigo-500 hover:text-indigo-50"
  }`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams(); //for setting the search params according to the filter

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      {/* Loop through the options and create a button for each */}
      {options.map((option) => {
        const active = searchParams.get(filterField) === option.value;
        return (
          <FilterButton
            key={option.value}
            active={active}
            onClick={() => handleClick(option.value)}
          >
            {option.label}
          </FilterButton>
        );
      })}
    </StyledFilter>
  );
};

export default Filter;
