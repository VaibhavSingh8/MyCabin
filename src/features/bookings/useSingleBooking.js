import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from '../../services/apiBookings';

export const useSingleBooking = () => {

    const { bookingId } = useParams();

    const {isPending, error, data:booking} = useQuery(
        {
            queryKey: ['booking', bookingId],
            queryFn: () => getBooking(bookingId),
            retry: false,
        }
    )
  return {isPending, error, booking, bookingId};
}