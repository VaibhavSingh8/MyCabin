import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../components/Spinner";
import CabinRow from "./CabinRow";

export const Table = ({ children }) => {
  return (
    <div className="border border-gray-200 text-sm bg-gray-0 rounded-md overflow-hidden">
      {children}
    </div>
  );
};

export const TableHeader = ({ children }) => {
  return (
    <header className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-6 items-center bg-gray-50 border-b border-gray-100 text-uppercase tracking-widest font-semibold text-gray-600 px-6 py-4">
      {children}
    </header>
  );
};

export const CabinTable = () => {
  const { isPending, data } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  // const x = useQuery({
  //   queryKey: ["cabins"],
  //   queryFn: getCabins,
  // });

  // console.log(x);

  if (isPending) {
    return <Spinner />;
  }

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
      {data?.documents?.map((c) => (
        <CabinRow cabin={c} key={c.$id} />
      ))}
    </Table>
  );
};

export default CabinTable;
