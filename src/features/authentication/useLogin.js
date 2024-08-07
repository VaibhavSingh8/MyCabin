import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi(email, password),
    onSuccess: (data) => {
      if (data.isAuthenticated) {
        console.log("Attempting to navigate to dashboard");
        toast.success("Logged in successfully");
        navigate("/dashboard");
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
