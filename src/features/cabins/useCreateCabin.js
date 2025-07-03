import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New Cabin Successfully Created");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
      //   reset(); as this reset is from react-hook-form so we can't write it here so react query give us facility of onSuccess inside the mutate function from the place where we calling this mutate function
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, createCabin };
}
