import { useQuery } from "@tanstack/react-query";
import { getBookings } from '../../services/apiBookings';

export const useBookings = (cursor, cursorDirection, limit) => {
  return useQuery({
    queryKey: ['booking', cursor, cursorDirection, limit],
    queryFn: () => getBookings([], limit, cursor, cursorDirection), 
  });
};
