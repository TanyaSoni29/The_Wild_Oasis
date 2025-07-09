// import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal-v1";
import CabinTable from "./CabinTable";

// export default function AddNewCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add New Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default function AddNewCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
      {/* we also want user can open multiple modal window as well but only one will be open at the same time so Modal.Open should know which window it should open so will pass prop opens and name as above */}
      <Modal.Open opens="table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        {/* now this will open table in Modal Window in this way we use multiple window as well */}
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

// why we need to convert this modal to the compound component - because this modal is not ideal as per the state management and the way rendering the modal that's why we need to change this modal to the compound component as this modal rendering depends on the isOpenModal state and if we not use this form inside modal window then this will never open the form and we don't want that MOdal depend on this State and we does not want AddCabin component keep track wether the modal is Open or not instead of AddCabin Modal window should be responsible means it has control of open or not it should keep track the state internally ( encapsulated ) inside the component so now we will do Add Cabin as compound component.
