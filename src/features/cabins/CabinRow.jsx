import { HiOutlineTrash, HiOutlineDuplicate } from "react-icons/hi";
import useDeleteCabin from "./useDeleteCabin";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../components/Modal";
import ConfirmDelete from "../../components/ConfirmDelete";
import Table from "../../components/Table";

const Img = ({ src, alt }) => {
  return (
    <td className="flex justify-center items-center ml-6 w-14 h-5">
      <img
        src={src}
        alt={alt}
        className="aspect-[3/2] object-cover object-center scale-150 -translate-x-[1.75rem]"
      />
    </td>
  );
};

const Cabin = ({ children }) => {
  return (
    <td className="font-sono text-gray-600 font-medium text-base">
      {children}
    </td>
  );
};

const MaxCapacity = ({ children }) => {
  return (
    <td className="font-sono text-gray-600 ml-[-40px] font-medium text-base">
      {children}
    </td>
  );
};

const Price = ({ children }) => {
  return <td className="font-sono ml-[-28px] font-medium">{children}</td>;
};

const Discount = ({ children }) => {
  return (
    <td className="font-sono font-medium ml-[-12px] text-green-700">
      {children}
    </td>
  );
};

const CabinRow = ({ cabin }) => {
  const { $id, name, maxCapacity, regularPrice, discount, description, image } =
    cabin;

  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { createCabin, isCreating } = useCreateCabin();

  function handleDuplicate() {
    createCabin({
      name: `${name} (Copy)`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <Table.Row>
      <Img src={image} alt={"cabin image"}/>
      <Cabin>{name}</Cabin>
      <MaxCapacity>Fits up to {maxCapacity} guests.</MaxCapacity>
      <Price>₹ {regularPrice}</Price>
      {discount ? <Discount>₹ {discount}</Discount> : <span>&mdash;</span>}

      <td className={`flex gap-x-4`}>
        <button className="max-w-8 rounded-md" onClick={handleDuplicate} disabled={isCreating}>
          <HiOutlineDuplicate />
        </button>
        <Modal width="lg">
          <Modal.Open width="lg" name="delete">
            <button className="max-w-8 rounded-md" disabled={isDeleting}>
              <HiOutlineTrash />
            </button>
          </Modal.Open>
          <Modal.Window>
            <ConfirmDelete
              resourceName="cabins"
              disabled={isDeleting}
              onConfirm={() => deleteCabin($id)}
            />
          </Modal.Window>
        </Modal>
      </td>
    </Table.Row>
  );
};

export default CabinRow;

