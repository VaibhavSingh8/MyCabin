import Empty from "../../components/Empty";
import Table from "../../components/Table";
import BookingRow from "./BookingRow";
import { useBookings } from "./useBookings";
import Spinner from "../../components/Spinner"

const BookingTable = () => {
    const {data: bookings, isPending } = useBookings();

    if(isPending) return <Spinner />

    if(!bookings?.documents?.length) return <Empty resourceName='Cabins'/>

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
        <Table.Body data={bookings?.documents} 
        render={(booking) => <BookingRow booking={booking} key={booking.$id}/>}
        />
        </Table>
    )
}

export default BookingTable