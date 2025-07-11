import Filter from "../../ui/Filter";
import ShortBy from "../../ui/ShortBy";
import TableOperations from "../../ui/TableOperations";

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <ShortBy
        options={[
          { value: "name-asc", label: "Short by name (A-Z)" },
          { value: "name-desc", label: "Short by name (Z-A)" },
          { value: "regularPrice-asc", label: "Short by price (low first)" },
          { value: "regularPrice-desc", label: "Short by price (high first)" },
          { value: "maxCapacity-asc", label: "Short by capacity (low first)" },
          {
            value: "maxCapacity-desc",
            label: "Short by capacity (high first)",
          },
        ]}
      />
    </TableOperations>
  );
}
