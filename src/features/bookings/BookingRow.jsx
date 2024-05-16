import { format, formatDistanceToNow, isToday } from "date-fns";
import Table from "../../components/Table"

function BookingRow({ booking }){

  const {totalPrice, startDate, endDate, numberOfNights, numberOfGuests,
     status, cabinID:{name: cabinName} , guestID:{fulName: guestName, email}} = booking;

  const Stacked = ({children}) => {
    return (
      <td className="flex flex-col font-medium text-base text-center
       whitespace-nowrap p-4">{children}</td>
    );
  }

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
          {isToday(new Date(startDate)) ? "Today" :
            formatDistanceToNow(startDate)}{" "}
          &rarr; {numberOfNights} night stay
        </span>
        <span className="text-sm text-gray-500">
          {format(new Date(startDate), 'MM/dd/yyyy')} &mdash;{" "}
          {format(new Date(endDate), 'MM/dd/yyyy')}
        </span>
      </Stacked>

      <td className="font-sono text-gray-600 font-medium text-base text-center whitespace-nowrap p-4">
        {status}
      </td>

      <td className="font-sono text-gray-600 font-medium text-base text-center whitespace-nowrap p-4">
        {totalPrice}
      </td> 

      <td></td>
      
    </Table.Row>
  )
}

export default BookingRow