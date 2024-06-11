import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings(){
    const [searchParams] = useSearchParams();

    const numberOfDays = !searchParams.get('last') ? 7 : Number(searchParams.get('last'));

    const daysAgoDate = subDays(new Date(), numberOfDays).toISOString();


    const {isPending, data: bookings} = useQuery(
        {
            queryFn: () => getBookingsAfterDate(daysAgoDate),
            queryKey: ['bookings', `last-${numberOfDays}`],

        }
    )

    return {isPending, bookings, numberOfDays};
}