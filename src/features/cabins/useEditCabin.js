import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id), // in react query we can only pass one data but in edit we need to pass id as well so we have to do some changes that we will send inside the object
    onSuccess: () => {
      toast.success("Cabin Successfully Edited");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
      //   reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, editCabin };
}
