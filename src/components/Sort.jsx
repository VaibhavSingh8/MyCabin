import { useSearchParams } from "react-router-dom";

const Sort = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <select
      className="bg-white border border-solid border-gray-200 rounded-sm py-1 px-2 font-poppins shadow-sm"
      onChange={handleChange}
      value={searchParams.get("sortBy") || "name-asc"}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
          {console.log(option.label)}
        </option>
      ))}
    </select>
  );
};

export default Sort;
