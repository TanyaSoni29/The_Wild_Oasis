import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function ShortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  const handleChange = (e) => {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  };
  return <Select options={options} type="white" onChange={handleChange} value={sortBy} />;
}
