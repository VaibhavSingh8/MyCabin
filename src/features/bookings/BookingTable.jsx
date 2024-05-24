import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Empty from "../../components/Empty";
import Table from "../../components/Table";
import BookingRow from "./BookingRow";
import { useBookings } from "./useBookings";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";
import { ITEMS_PER_PAGE } from '../../utils/constants';

const BookingTable = () => {
  const limit = ITEMS_PER_PAGE;
  const [cursor, setCursor] = useState(null);
  const [cursorDirection, setCursorDirection] = useState('after');

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: bookings, isPending } = useBookings(cursor, cursorDirection, limit);

  useEffect(() => {
    if (currentPage === 1) {
      setCursor(null);
    }
  }, [currentPage]);

  if (isPending) return <Spinner />;
  if (!bookings?.documents?.length) return <Empty resourceName='Cabins' />;

  // Filter Bookings based on the Booking Status
  const filteredValue = searchParams.get('status') || 'all';
  let filteredBookings;

  if (filteredValue === 'all') {
    filteredBookings = bookings.documents;
  } else if (filteredValue === 'unconfirmed') {
    filteredBookings = bookings.documents.filter(
      (booking) => booking.status === 'unconfirmed'
    );
  } else if (filteredValue === 'checked-in') {
    filteredBookings = bookings.documents.filter(
      (booking) => booking.status === 'checked-in'
    );
  } else if (filteredValue === 'checked-out') {
    filteredBookings = bookings.documents.filter(
      (booking) => booking.status === 'checked-out'
    );
  }

  // Sort Bookings
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split("-");
  const modifier = direction === 'asc' ? 1 : -1;

  const sortedBookings = filteredBookings.sort((a, b) => {
    const fieldA = a[field];
    const fieldB = b[field];

    if (typeof fieldA === "string" && typeof fieldB === "string") {
      return fieldA.localeCompare(fieldB) * modifier;
    } else {
      return (fieldA - fieldB) * modifier;
    }
  });

  // Pagination Handlers

  const totalPages = Math.ceil( bookings?.total / limit);

    const handleNextPage = () => {
        const next = currentPage === totalPages ? currentPage : currentPage + 1;
        searchParams.set("page", next);
        setSearchParams(searchParams);
        setCursor(sortedBookings[sortedBookings.length - 1].$id);
        setCursorDirection('after');
        
    };

    const handlePrevPage = () => {
        const prev = currentPage === 1 ? currentPage : currentPage - 1;
        searchParams.set("page", prev);
        setSearchParams(searchParams);
        setCursor(sortedBookings[0].$id);
        setCursorDirection('before');
    };

  return (
    <>
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
        <Table.Body 
          data={sortedBookings}
          render={(booking) => <BookingRow booking={booking} key={booking.$id} />}
        />
      </Table>
      <Pagination 
        totalResults={bookings.total}
        totalPages={totalPages}
        currentPage={currentPage}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        itemsPerPage={limit}
      />
    </>
  );
};

export default BookingTable;
