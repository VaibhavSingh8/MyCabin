import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export function useLogin() {
  const [auth, setAuth] = useState(false);
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi(email, password),
    onSuccess: (data) => {
      if (data.isAuthenticated) {
        setAuth(true);
        toast.success("Logged in successfully");
      } else {
        toast.error(data.error || "Authentication");
      }
    },
    onError: (err) => {
      toast.error(err.message || "An error occurred during login");
    },
  });

  useEffect(() => {
    if (auth) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);

  return { login, isLoading };
}
