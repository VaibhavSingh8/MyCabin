import Row from "../components/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <h1>All Cabins</h1>

        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
};

export default Cabins;
