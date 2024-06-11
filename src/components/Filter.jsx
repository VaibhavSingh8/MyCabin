import { useSearchParams } from "react-router-dom";

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

const Filter = ({ filterField, options, defaultValue }) => {
  const [searchParams, setSearchParams] = useSearchParams(); // Set the search params according to the filter

  const handleClick = (value) => {
    // Set the search params according to the filter
    if (value === "all") {
      searchParams.delete(filterField);
    } else {
      searchParams.set(filterField, value);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-between border border-gray-200 bg-white rounded-md shadow-sm p-1 mb-3 md:mb-0">
      {/* Loop through the options and create a button for each */}
      {options.map((option) => {
        const active =
          option.value === "all"
            ? !searchParams.has(filterField)
            : searchParams.get(filterField) === option.value ||
              (searchParams.get(filterField) === null &&
                option.value === defaultValue);
        return (
          <FilterButton
            key={option.value}
            active={active}
            disabled={active}
            onClick={() => handleClick(option.value)}
          >
            {option.label}
          </FilterButton>
        );
      })}
    </div>
  );
};

export default Filter;
