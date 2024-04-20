import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export const useCabins = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  return { isPending, data, error }
}
