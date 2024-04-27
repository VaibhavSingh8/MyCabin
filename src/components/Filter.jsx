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
  const buttonClasses = `bg-white border-none rounded-md text-base px-2 py-1 transition-colors font-poppins font-normal ${
    active
      ? "bg-brand-600 text-slate-300"
      : "hover:bg-indigo-500 hover:text-indigo-50"
  }`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //for setting the search params according to the filter

  const handleClick = (value) => {
    searchParams.set("discount", value);
    setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      <FilterButton onClick={() => handleClick("all")}>All</FilterButton>
      <FilterButton onClick={() => handleClick("no-discount")}>
        No discount
      </FilterButton>
      <FilterButton onClick={() => handleClick("with-discount")}>
        Discount Applied
      </FilterButton>
    </StyledFilter>
  );
};

export default Filter;
