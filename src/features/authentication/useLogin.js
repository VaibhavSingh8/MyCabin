import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
// import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  // const queryClient = useQueryClient();
  //const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi(email, password),
    onSuccess: async (data) => {
      if (data.isAuthenticated) {
        toast.success("Logged in successfully");
        console.log("navigating...");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      } else {
        toast.error(data.error || "An error occurred during login");
      }
    },
    onError: (err) => {
      toast.error(err.message || "An error occurred during login");
    },
  });

  return { login, isLoading };
}
