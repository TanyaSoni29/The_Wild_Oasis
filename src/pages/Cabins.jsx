// import { useEffect } from "react";
// import { useState } from "react";
import AddNewCabin from "../features/cabins/AddNewCabin";
import CabinTable from "../features/cabins/CabinTable";
// import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  // const [showForm, setShowForm] = useState(false);
  // useEffect(() => {
  //   getCabins().then((data) => console.log(data));
  // }, []); now in place of useEffect we will use react-query

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <AddNewCabin />
      </Row>
      {/* <Button onClick={() => setShowForm((show) => !show)}>
        Add New Cabin
      </Button>
      {showForm && <CreateCabinForm />} */}
    </>
  );
}

export default Cabins;
