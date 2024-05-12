import { HiOutlineTrash, HiOutlineDuplicate } from "react-icons/hi";
import useDeleteCabin from "./useDeleteCabin";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../components/Modal";
import ConfirmDelete from "../../components/ConfirmDelete";
import Table from "../../components/Table";

const Img = ({ src, alt }) => {
  return (
    <td className="p-2">
      <img src={src} alt={alt} className="aspect-[3/2] object-cover object-center max-w-[6rem] mx-auto" />
    </td>
  );
};


const Cabin = ({ children }) => {
  return (
    <td className="font-sono text-gray-600 font-medium text-base p-2 pl-4 whitespace-nowrap">
      {children}
    </td>
  );
};

const MaxCapacity = ({ children }) => {
  return (
    <td className="font-sono text-gray-600 ml-[-40px] font-medium text-base p-2 pl-4 whitespace-nowrap">
      {children}
    </td>
  );
};

const Price = ({ children }) => {
  return <td className="font-sono ml-[-28px] font-medium p-2 pl-4 whitespace-nowrap">{children}</td>;
};

const Discount = ({ children }) => {
  return (
    <td className="font-sono font-medium ml-[-12px] text-green-700 p-2 pl-4 whitespace-nowrap">
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

      <td className="p-2">
        <button className="max-w-8 rounded-md hover:bg-slate-200 p-2" onClick={handleDuplicate} disabled={isCreating}>
          <HiOutlineDuplicate />
        </button>
        
        <Modal width="lg">
          <Modal.Open width="lg" name="delete">
            <button className="max-w-8 rounded-md p-2 hover:bg-slate-200" disabled={isDeleting}>
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

