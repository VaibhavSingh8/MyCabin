import Button from "../../components/Button";
import CabinForm from "./CabinForm";
import Modal from "../../components/Modal";

const AddCabin = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button className="mt-4">Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AddCabin;
