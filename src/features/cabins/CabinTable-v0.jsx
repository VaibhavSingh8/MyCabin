import Spinner from "../../components/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import { useSearchParams } from "react-router-dom";

export const Table = ({ children }) => {
  return (
    <div className="border border-gray-200 bg-gray-0 rounded-md overflow-auto text-base font-poppins">
      {children}
    </div>
  );
};

export const TableHeader = ({ children }) => {
  return (
    <header className="grid grid-cols-[0.8fr_1.2fr_2.2fr_1fr_1fr_1fr] gap-x-8 items-center bg-gray-50 border-b border-gray-100 text-uppercase tracking-widest font-semibold text-gray-600 px-6 py-4">
      {children}
    </header>
  );
};

export const CabinTable = () => {
  const { isPending, data } = useCabins();

  const [searchParams] = useSearchParams();

  if (isPending) {
    return <Spinner />;
  }

  // Filter cabins based on the discount query parameter
  const filteredValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filteredValue === "all") {
    filteredCabins = data?.documents;
  } else if (filteredValue === "no-discount") {
    filteredCabins = data?.documents?.filter(
      (cabin) => cabin.discount === 0 || cabin.discount === null
    );
  } else if (filteredValue === "with-discount") {
    filteredCabins = data?.documents?.filter((cabin) => cabin.discount > 0);
  }

  // Sort cabins
  const sortBy = searchParams.get("sortBy") || "regularPrice-asc";

  const [field, direction] = sortBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;

  const sortedCabins = filteredCabins?.sort((a, b) => {
    const fieldA = a[field];
    const fieldB = b[field];

    if (typeof fieldA === "string" && typeof fieldB === "string") {
      return fieldA.localeCompare(fieldB) * modifier;
    } else {
      return (fieldA - fieldB) * modifier;
    }
  });

  return (
    <Table role="table">
      <TableHeader row="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {sortedCabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.$id} />
      ))}
    </Table>
  );
};

export default CabinTable;
