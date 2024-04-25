import Button from "../../components/Button";
import CabinForm from "./CabinForm";
import Modal from "../../components/Modal";

const AddCabin = () => {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CabinForm />
      </Modal.Window>
    </Modal>
  );
};

export default AddCabin;
