import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupApi({ email, password, fullName }),
    onSuccess: () => {
      toast.success(
        "Account succesfully created! Please verify the new account from the user's email adress."
      );
    },
    onError: (error) =>
      toast.error(error.message || "An error occurred during signup"),
  });

  return { signup, isPending };
}

export default useSignup;
