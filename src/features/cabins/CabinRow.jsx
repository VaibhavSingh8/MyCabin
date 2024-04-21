import { HiOutlineTrash } from "react-icons/hi2";
import { HiOutlineDuplicate } from "react-icons/hi";
import useDeleteCabin from "./useDeleteCabin";
import useCreateCabin from "./useCreateCabin";

const TableRow = ({ children }) => {
  return (
    <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-6 items-center px-6 py-5 border-b border-gray-100 last:border-b-0 text-gray-600">
      {children}
    </div>
  );
};

const Img = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center ml-6 w-14 h-5">
      <img
        src={src}
        alt={alt}
        className=" aspect-[3/2] object-cover object-center scale-150 -translate-x-[1.75rem]"
      />
    </div>
  );
};

const Cabin = ({ children }) => {
  return (
    <div className="font-sono text-gray-600 font-medium text-base">
      {children}
    </div>
  );
};

const MaxCapacity = ({ children }) => {
  return (
    <div className="font-sono text-gray-600 ml-[-40px] font-medium text-base">
      {children}
    </div>
  );
};

const Price = ({ children }) => {
  return <div className="font-sono ml-[-28px] font-medium">{children}</div>;
};

const Discount = ({ children }) => {
  return (
    <div className="font-sono font-medium ml-[-12px] text-green-700">
      {children}
    </div>
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
    <TableRow role="row">
      <Img src={image} alt={"cabin image"} />
      <Cabin>{name}</Cabin>
      <MaxCapacity>Fits up to {maxCapacity} guests.</MaxCapacity>
      <Price>₹ {regularPrice}</Price>
      {discount ? <Discount>₹ {discount}</Discount> : <span>&mdash;</span>}

      <div className="flex gap-x-4">
        <button
          className="max-w-8 rounded-md"
          onClick={handleDuplicate}
          disabled={isCreating}
        >
          <HiOutlineDuplicate />
        </button>
        <button
          className="max-w-8 rounded-md"
          onClick={() => deleteCabin($id)}
          disabled={isDeleting}
        >
          <HiOutlineTrash />
        </button>
      </div>
    </TableRow>
  );
};

export default CabinRow;
