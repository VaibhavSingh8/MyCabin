import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings"

export const useUpdateSetting = () => {

  const queryClient = useQueryClient();

  const { mutate, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings updated successfully");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  })
  return { mutate, isUpdating };
};


