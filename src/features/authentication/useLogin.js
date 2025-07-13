import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success("User Logged in Successfully");
      queryClient.setQueryData(["user"], user.user); // this is same query key for getUser in this way we can set the cache manually as well
      navigate("/dashboard", { replace: true }); // replace true because we basically erasing the previous route track so going back button will not work
    },
    onError: (err) => {
      console.log("ERR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLogging };
}

// why we need one more function for getting authenticated user because user also load the dashboard after one day or any another so the user must be authenticated for that

// now when we already inside the dashboard after login immediately then we does not need fetch user again it should fetch user again if we reload the app completely
//  show to implement this we will cache the user from Login api returned data and manually cached that user in React query
