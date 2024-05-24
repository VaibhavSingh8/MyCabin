import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getBookings } from '../../services/apiBookings';

export const useBookings = (cursor, cursorDirection, limit) => {
  const queryClient = useQueryClient();

  const {data, isPending, error} = useQuery({
    queryKey: ['booking', cursor, cursorDirection, limit],
    queryFn: () => getBookings([], limit, cursor, cursorDirection), 
  });

  //Pre-fetching

  if(data?.documents?.length > 0){
    const lastItem = data.documents[data.documents.length - 1];
    const firstItem = data.documents[0];
  

    // pre-fetch next page
    queryClient.prefetchQuery({
      queryKey: ['booking', lastItem.$id, 'after', limit],
      queryFn: () => getBookings([], limit, lastItem.$id , 'after'), 
    });

    // pre-fetch previous page
    queryClient.prefetchQuery({
      queryKey: ['booking', firstItem.$id , 'before', limit],
      queryFn: () => getBookings([], limit, firstItem.$id , 'before'), 
    });
  }
  
  return {data, isPending, error};
};
