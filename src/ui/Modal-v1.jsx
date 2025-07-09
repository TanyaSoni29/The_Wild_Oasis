import {
  cloneElement,
  createContext,
  useContext,
  // useEffect,
  // useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider
      value={{
        openName,
        close,
        open,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  // return children; below in this way we clone element and attach any events
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

// inside the AddNewCabin we can not pass event handler as it will not accept any event so we have to attach event with children prop in Open component for that we will use Clone Element feature of React (please read more about from docs) this technique is very uncommon so u can't overuse this technique

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  // const ref = useRef();

  // useEffect(() => {
  //   const handleClick = (e) => {
  //     if (ref.current && !ref.current.contains(e.target)) {
  //       close();
  //     }
  //   };

  //   document.addEventListener("click", handleClick, true);

  //   return () => document.removeEventListener("click", handleClick, true);
  // }, [close]);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        {/* As style of form is change as we are not setting style on the basis of onCloseModal so here also we have to pass that prop similarly  */}
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

// in createPortal Function it is part of react-dom we pass two argument first is our jsx and second is our place where we want to place this jsx here we want in Document.body and we could also select other place as well like document.querySelector() like this

// this is above our complete compound component done and it is far flexible as compare to our previous one

// for detecting the click happen outside modal window so that we need to close the modal window we do thing as above

// now when we done this then we now that events are bubbled up to the component and due to this useEffect when we are clicking the add new Cabin button then click event is bubble up and open the modal and then useEffect also have that ref where we are click the outside to open that modal window so that useEffect will close window again that's why Add new cabin is not opening the modal solution for that -- so we have to listen these event not in bubbling face while we have to listen it on capturing face means event moves down the tree not event moves up the down tree so setting on capturing phase we need to pass third parameter on eventListener is true as above
