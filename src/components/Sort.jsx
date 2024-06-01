import { useSearchParams } from "react-router-dom";

const Sort = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  const sortByValue = searchParams.get("sortBy") || "";
  return (
    <select
      className="bg-white border border-solid border-gray-200 rounded-md py-2 px-2 font-poppins shadow-sm"
      onChange={handleChange}
      value={sortByValue}
    >
      {options?.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Sort;
