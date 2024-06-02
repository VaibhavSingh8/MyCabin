import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings";
import {toast} from 'react-hot-toast'
export const useCheckout = () => {
    const queryClient = useQueryClient();
    const {isPending:isCheckingOut , mutate: checkout} = useMutation({
        mutationFn: (bookingId) => updateBooking(bookingId, {status: "checked-out"}),
        onSuccess: (bookingId) => {
            toast.success(`Booking #${bookingId} successfully checked-out`)
            queryClient.invalidateQueries({active: true});
        },
        onError: () => toast.error('There was an error while checking one')
  });

  return {checkout, isCheckingOut}
}