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

  // page
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, error, count };
}

// now filter is working but table is not updated because haven't tell react query that filter value change so u need to fetch again for that info we will add filter as dependency inside where provide the string key to fetch bookings as above hence we can say this queryKey array behave as dependency array for useQuery hook

// this is one case if we want to filter on basis of greater and eq or less then or eq on total price so currently we are not sending method but we also send the method to the query as well.

// and if you want multiple filter like status and total price greater then equal then in filter we can pass array of object and loop over array and attach query on each object present in array basis

// now the first time whenever we open a page that spinner will come so in case of pagination that spinner will not show for that we will prefetched the data now here we have concept of prefetching please consider above
