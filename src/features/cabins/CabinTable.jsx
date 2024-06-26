import Empty from "../../components/Empty";
import Spinner from "../../components/Spinner";
import Table from "../../components/Table";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import { useSearchParams } from "react-router-dom";


export const CabinTable = () => {
  const { isPending, data } = useCabins();

  const [searchParams] = useSearchParams();

  if (isPending) {
    return <Spinner />;
  }
  
  if(!data.documents.length) return <Empty resourceName='Cabins'/>

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
    <Table>
      <Table.Header>
        <th className="p-4 text-center"></th>
        <th className="p-4 text-center">Cabin</th>
        <th className="p-4 text-center">Capacity</th>
        <th className="p-4 text-center">Price</th>
        <th className="p-4 text-center">Discount</th>
        <th className="p-4 text-center"></th>
      </Table.Header>

      {/* Using render props pattern to render the cabins */}
      <Table.Body data={sortedCabins} 
      render={(cabin) => <CabinRow cabin={cabin} key={cabin.$id} />}
      />
    </Table>
  );
};

export default CabinTable;
