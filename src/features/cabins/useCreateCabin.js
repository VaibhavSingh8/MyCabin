import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin as createCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

const useCreateCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createCabinApi,
    onSuccess: () => {
      toast.success("Cabin created successfully");
      //invalidate the cache to refetch the data from the server
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });

    },
    onError: (err) => toast.error(err.message),
  });
  return { createCabin, isCreating };
}

export default useCreateCabin;
