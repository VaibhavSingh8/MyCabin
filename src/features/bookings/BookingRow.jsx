import { format, isToday } from "date-fns";
import Table from "../../components/Table";
import Tag from "../../components/Tag";
import { formatDistanceFromNow } from "../../utils/helpers";
import { HiArrowDownOnSquare, HiEye } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Menus from "../../components/Menus";

function BookingRow({ booking }) {
  const {
    totalPrice,
    startDate,
    endDate,
    numberOfNights,
    status,
    $id: bookingId,
    cabinID: { name: cabinName },
    guestID: { fulName: guestName, email },
  } = booking;

  const navigate = useNavigate();

  const Stacked = ({ children }) => {
    return (
      <td
        className="flex flex-col font-medium text-base text-center
       whitespace-nowrap p-4"
      >
        {children}
      </td>
    );
  };

  const statusTags = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "gray",
  };

  return (
    <Table.Row>
      <td className="font-sono text-gray-600 font-medium text-base text-center whitespace-nowrap p-4">
        {cabinName}
      </td>

      <td>
        <Stacked>
          <span>{guestName}</span>
          <span className="text-sm text-gray-500">{email}</span>
        </Stacked>
      </td>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numberOfNights} night stay
        </span>
        <span className="text-xs mt-1 text-gray-500">
          {format(new Date(startDate), "MM/dd/yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MM/dd/yyyy")}
        </span>
      </Stacked>

      <td className="font-sono text-gray-600 font-medium text-base text-center whitespace-nowrap p-4">
        <Tag status={statusTags[status]}>{status.replace("-", " ")}</Tag>
      </td>

      <td className="font-sono text-gray-600 font-medium text-base text-center whitespace-nowrap p-4">
        {totalPrice}
      </td>

      <td>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/booking/${bookingId}`)}
            >
              See Details
            </Menus.Button>
            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check In
              </Menus.Button>
            )}
            <Menus.Button
              icon={<HiArrowDownOnSquare />}
              onClick={() => navigate(`/checkin/${bookingId}`)}
            >
              Delete Booking
            </Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </td>
    </Table.Row>
  );
}

export default BookingRow;
