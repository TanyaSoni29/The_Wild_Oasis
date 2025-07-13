import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId), // this is function for fetching booking data
    retry: false, // as it try to fetch data three times in beginning so here we are setting if you didn't get in the first attempt it means data is not exist so there is no point in retry again
  });
  return { isLoading, booking, error };
}
