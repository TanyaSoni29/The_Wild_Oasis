import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBooking() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");

  // filter
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };
  // : { field: "totalPrice", value: 5000, method: "gte" };

  // Short
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings, error };
}

// now filter is working but table is not updated because haven't tell react query that filter value change so u need to fetch again for that info we will add filter as dependency inside where provide the string key to fetch bookings as above hence we can say this queryKey array behave as dependency array for useQuery hook
// this is one case if we want to filter on basis of greater and eq or less then or eq on total price so currently we are not sending method but we also send the method to the query as well.

// and if you want multiple filter like status and total price greater then equal then in filter we can pass array of object and loop over array and attach query on each object present in array basis
