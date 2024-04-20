import useDeleteCabin from "./useDeleteCabin";

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
  const { $id, name, maxCapacity, regularPrice, discount, image } = cabin;

  const { isDeleting, deleteCabin } = useDeleteCabin();

  return (
    <TableRow role="row">
      <Img src={image} alt={"cabin image"} />
      <Cabin>{name}</Cabin>
      <MaxCapacity>Fits up to {maxCapacity} guests.</MaxCapacity>
      <Price>₹ {regularPrice}</Price>
      {discount ? <Discount>₹ {discount}</Discount> : <span>&mdash;</span>}

      <button
        className="bg-blue-300 p-2 rounded-md"
        onClick={() => deleteCabin($id)}
        disabled={isDeleting}
      >
        Delete
      </button>
    </TableRow>
  );
};

export default CabinRow;
