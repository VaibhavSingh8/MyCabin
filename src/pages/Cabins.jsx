import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

const Cabins = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl ml-5 text-[#374151]">
          All Cabins
        </h1>
        <CabinTableOperations />
      </div>

      <div className="overflow-scroll md:overflow-auto">
        <CabinTable />
        <AddCabin />
      </div>
    </>
  );
};

export default Cabins;
