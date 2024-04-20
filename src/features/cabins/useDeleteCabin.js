import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";


//useDeleteCabin hook to handle deleteCabin functionality
const useDeleteCabin = () => {
  const queryClient = useQueryClient();

  //using useMutation to handle deleteCabin functionality
  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      //invalidate the cache to refetch the data from the server
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
      toast.success("Cabin deleted successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
};

export default useDeleteCabin;
