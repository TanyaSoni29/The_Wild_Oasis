import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user); // manual updating the user cache with the receive data from api
      //   queryClient.invalidateQueries({ queryKey: ["user"] }); now we does not need this upper one is sufficient
    },
    onError: (err) => toast.error(err?.message),
  });

  return { updateUser, isUpdating };
}
