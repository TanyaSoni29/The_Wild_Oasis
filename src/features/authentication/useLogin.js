import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      toast.success("User Logged in Successfully");
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log("ERR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLogging };
}
