import { useState } from "react";
import Button from "../../components/Button";
import CabinForm from "./CabinForm";
import Modal from "../../components/Modal";

const AddCabin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsModalOpen((show) => !show)}>
        Add new Cabin
      </Button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CabinForm onModalClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default AddCabin;
