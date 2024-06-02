import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";


//useDeleteCabin hook to handle deleteCabin functionality
const useDeleteBooking = () => {
  const queryClient = useQueryClient();

  //using useMutation to handle deleteCabin functionality
  const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      //invalidate the cache to refetch the data from the server
      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
      toast.success("Booking deleted successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
};

export default useDeleteBooking;
