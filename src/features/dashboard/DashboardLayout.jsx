import Statistics from "./Statistics";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
import Spinner from "../../components/Spinner";
import { SalesChart } from "./SalesChart";

function DashboardLayout() {
  const {
    isPending: isPendingBookings,
    bookings,
    numberOfDays,
  } = useRecentBookings();
  const { isPending: isPendingStays, confirmedStays } = useRecentStays();

  const { data: cabins, isPending: isPendingCabins } = useCabins();

  const cabinCount = cabins?.documents.length;

  if (isPendingBookings || isPendingStays || isPendingCabins)
    return <Spinner />;

  return (
    <>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center mt-6 font-semibold text-xl">
        <Statistics
          bookings={bookings}
          confirmedStays={confirmedStays}
          numberOfDays={numberOfDays}
          cabinCount={cabinCount}
        />
      </div>

      <SalesChart bookings={bookings} numberOfDays={numberOfDays} />
    </>
  );
}

export default DashboardLayout;
