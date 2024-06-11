import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

export default function Statistics({
  bookings,
  confirmedStays,
  numberOfDays,
  cabinCount,
}) {
  function Stat({ color, icon, title, value, className }) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 grid grid-cols-6 gap-8 mb-2">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center col-span-2 bg-${color}-100 ${className}`}
        >
          {icon}
        </div>
        <div className="flex flex-col justify-center items-start col-start-3 col-end-7">
          <h5 className="uppercase text-sm font-semibold text-gray-500 tracking-wider">
            {title}
          </h5>
          <p className="text-2xl font-medium">{value}</p>
        </div>
      </div>
    );
  }

  const numberOfBookings = bookings?.documents.length;

  const sales = bookings?.documents.reduce(
    (acc, curr) => acc + curr.totalPrice,
    0
  );

  const checkIns = confirmedStays?.length;

  const occupancy =
    confirmedStays.reduce((acc, cur) => acc + cur.numberOfNights, 0) /
    (numberOfDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        value={numberOfBookings}
        icon={<HiOutlineBriefcase />}
        color="blue"
      />
      <Stat
        title="Sales"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
        color="green"
      />
      <Stat
        title="Check Ins"
        value={checkIns}
        icon={<HiOutlineCalendarDays />}
        className="bg-red-100"
      />
      <Stat
        title="Occupancy Rate"
        value={Math.round(occupancy * 100) + "%"}
        icon={<HiOutlineChartBar />}
        color="yellow"
      />
    </>
  );
}
