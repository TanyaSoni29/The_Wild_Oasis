import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCounts,
}) {
  // 1. number of bookings
  const numBookings = bookings.length;

  // 2. Sales
  const sales = bookings?.reduce((acc, curr) => acc + curr.totalPrice, 0);

  // 3. Check ins
  const checkins = confirmedStays.length;

  // 4. occupancy rate = num of checkin nights / all available nights (num of cabins * num days)
  const occupation =
    confirmedStays?.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCounts);
  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="Bookings"
        value={numBookings}
        color="blue"
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title="Sales"
        value={formatCurrency(sales)}
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title="Check ins"
        value={checkins}
        color="indigo"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy rate"
        value={Math.round(occupation * 100) + "%"}
        color="yellow"
      />
    </>
  );
}
