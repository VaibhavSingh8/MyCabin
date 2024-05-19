import Empty from "../../components/Empty";
import Table from "../../components/Table";
import BookingRow from "./BookingRow";
import { useBookings } from "./useBookings";
import Spinner from "../../components/Spinner"
import { useSearchParams } from "react-router-dom";

const BookingTable = () => {
    const {data: bookings, isPending } = useBookings();

    const [searchParams] = useSearchParams();

    if(isPending) return <Spinner />

    if(!bookings?.documents?.length) return <Empty resourceName='Cabins'/>

    // Filter Bookings based on the Booking Status

    const filteredValue = searchParams.get('status') || 'all';

    let filteredBookings;

    if(filteredValue === 'all'){
        filteredBookings = bookings?.documents;
    } else if(filteredValue === 'unconfirmed'){
        filteredBookings = bookings?.documents.filter(
            (booking) => booking.status === 'unconfirmed'
        )
    } else if(filteredValue === 'checked-in'){
        filteredBookings = bookings?.documents.filter(
            (booking) => booking.status === 'checked-in'
        )
    }
     else if(filteredValue === 'checked-out'){
        filteredBookings = bookings?.documents.filter(
            (booking) => booking.status === 'checked-out'
        )
    }

    // Sort Bookings
    const sortBy = searchParams.get('sortBy') || 'startDate-asc';

    const [field, direction] = sortBy.split("-");

    const modifier = direction === 'asc' ? 1 : -1;

    const sortedBookings = filteredBookings?.sort((a, b) => {
        const fieldA = a[field];
        const fieldB = b[field];

        if (typeof fieldA === "string" && typeof fieldB === "string") {
            return fieldA.localeCompare(fieldB) * modifier;
        } else {
            return (fieldA - fieldB) * modifier;
        }
    })

    return (
        <Table>
            <Table.Header>
            <th className="p-4 text-center">Cabin</th>
            <th className="p-4 text-center">Guest</th>
            <th className="p-4 text-center">Dates</th>
            <th className="p-4 text-center">Status</th>
            <th className="p-4 text-center">Amount</th>
            <th className="p-4 text-center"></th>
        </Table.Header>
        {/* Using render props pattern to render the bookings */}
        <Table.Body data={sortedBookings} 
        render={(booking) => <BookingRow booking={booking} key={booking.$id}/>}
        />
        </Table>
    )
}

export default BookingTable