import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";


export const useSettings = () => {
  const { isPending, data, error } = useQuery({ queryKey: ['settings'], queryFn: getSettings });

  const settings = data?.documents[0];

  const settingsId = settings?.$id;


  return { isPending, settings, error, settingsId };
}

