import Row from "../components/Row";
import CabinTable from "../features/cabins/CabinTable";
import CabinForm from "../features/cabins/CabinForm";

const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <h1>All Cabins</h1>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
        <CabinForm />
      </Row>
    </>
  );
};

export default Cabins;
