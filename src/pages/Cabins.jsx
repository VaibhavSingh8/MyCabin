import Row from "../components/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";

const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <h1>All Cabins</h1>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
};

export default Cabins;
