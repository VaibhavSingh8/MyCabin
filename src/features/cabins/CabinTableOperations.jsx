import TableOperations from "../../components/TableOperations";
import Filter from "../../components/Filter";
import Sort from "../../components/Sort";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "Discount Applied" },
        ]}
      />

      <Sort
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price(Low to High)" },
          { value: "regularPrice-desc", label: "Sort by price(High to Low)" },
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
