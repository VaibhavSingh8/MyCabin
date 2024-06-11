import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays(){
    const [searchParams] = useSearchParams();

    const numberOfDays = !searchParams.get('last') ? 7 : Number(searchParams.get('last'));

    const daysAgoDate = subDays(new Date(), numberOfDays).toISOString();


    const {isPending, data: stays} = useQuery(
        {
            queryFn: () => getStaysAfterDate(daysAgoDate),
            queryKey: ['stays', `last-${numberOfDays}`],

        }
    );

    const confirmedStays = stays?.documents.filter((stay) => stay.status === 'checked-in' || stay.status === 'checked-out');

    return {isPending, stays, confirmedStays};
}