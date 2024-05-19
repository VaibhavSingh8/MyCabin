import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

const Bookings = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl ml-5">All Bookings</h1>  
        <BookingTableOperations />
      </div>
      <BookingTable />
    </>
  );
};

export default Bookings;
