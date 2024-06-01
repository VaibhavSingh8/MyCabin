import Filter from "../../components/Filter";
import Sort from "../../components/Sort";
import TableOperations from "../../components/TableOperations";

const BookingTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "unconfirmed", label: "Unconfirmed" },
          { value: "checked-in", label: "Checked In" },
          { value: "checked-out", label: "Checked Out" },
        ]}
      />
      <Sort
        options={[
          { value: "startDate-asc", label: "Sort by date (Earlier first)" },
          { value: "startDate-desc", label: "Sort by date (Recent first)" },
          { value: "totalPrice-asc", label: "Sort by price (Low to High)" },
          { value: "totalPrice-desc", label: "Sort by price (High to Low)" },
        ]}
      />
    </TableOperations>
  );
};

export default BookingTableOperations;
