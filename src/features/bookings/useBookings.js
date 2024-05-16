import { useQuery } from "@tanstack/react-query";
import { getBookings } from '../../services/apiBookings';

export const useBookings = () => {
    const {isPending, data , error} = useQuery({
        queryKey: ['booking'],
        queryFn: getBookings,
    });

    return {isPending, data , error}
}