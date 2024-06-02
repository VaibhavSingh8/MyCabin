import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings";
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
export const useCheckin = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {isPending:isCheckingIn , mutate: checkin} = useMutation({
        mutationFn: ({bookingId, breakfast}) => updateBooking(bookingId, {status: "checked-in" , 
        isPaid: true, ...breakfast}),
        onSuccess: (bookingId) => {
            toast.success(`Booking #${bookingId} successfully checked-in`)
            queryClient.invalidateQueries({active: true});
            navigate('/')
        },
        onError: () => toast.error('There was an error while checking one')
  });

  return {checkin, isCheckingIn}
}