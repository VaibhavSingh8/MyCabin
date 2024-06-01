import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import { format, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

const BookingData = ({ booking }) => {
  //   console.log(booking);
  const {
    $createdAt,
    startDate,
    endDate,
    numberOfNights,
    numberOfGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guestID: { fulName: guestName, email, nationality },
    cabinID: { name: cabinName },
  } = booking;

  function DataItem({ icon, label, children }) {
    return (
      <div className="flex items-center gap-6 py-2">
        <span className="flex items-center gap-2 font-semibold">
          {icon}
          <span>{label}</span>
        </span>
        {children}
      </div>
    );
  }

  return (
    <>
      <section className="bg-gray-50 border border-gray-100 rounded-md overflow-hidden mt-8 mx-4">
        <header className="sm:flex items-center justify-between bg-indigo-500 py-6 px-8 font-medium text-[#e0e7ff]">
          <div className="flex items-center gap-3 font-semibold text-xl">
            <HiOutlineHomeModern />
            <p>
              {numberOfNights} nights in{" "}
              <span className="text-xl ml-1">{cabinName}</span>
            </p>
          </div>

          <p className="text-xl">
            {format(new Date(startDate), "EEE, MMM dd yyyy")} (
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}
            ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
          </p>
        </header>

        <section className="p-8 pb-4 overflow-auto">
          <div className="flex items-center gap-3 mb-4 text-gray-500">
            {/* {countryFlag && (
              <Flag src={countryFlag} alt={`Flag of ${country}`} />
            )} */}
            <p className="font-semibold text-gray-700">
              {guestName}{" "}
              {numberOfGuests > 1 ? `+ ${numberOfGuests - 1} guests` : ""}
            </p>
            <span>&bull;</span>
            <p>{email}</p>
            <span>&bull;</span>
            <p>Nationality: {nationality}</p>
          </div>

          {observations && (
            <DataItem
              icon={<HiOutlineChatBubbleBottomCenterText />}
              label="Observations"
            >
              {observations}
            </DataItem>
          )}

          <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
            {hasBreakfast ? "Yes" : "No"}
          </DataItem>

          <div
            className={`flex items-center justify-between p-4 rounded-sm mt-6 ${
              isPaid
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            <DataItem icon={<HiOutlineCurrencyDollar />} label="Total price">
              {formatCurrency(totalPrice)}
              {hasBreakfast &&
                ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                  extrasPrice
                )} breakfast)`}
            </DataItem>
            <p className="uppercase text-sm font-semibold">
              {isPaid ? "Paid" : "Will pay at property"}
            </p>
          </div>
        </section>

        <footer className="p-6 text-sm text-gray-500 text-right">
          <p>Booked {format(new Date($createdAt), "EEE, MMM dd yyyy, p")}</p>
        </footer>
      </section>
    </>
  );
};

export default BookingData;
