import React, { cloneElement } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { createContext, useContext, useState, useRef, useEffect } from "react";

// eslint-disable-next-line react/display-name
const StyledModal = React.forwardRef(
  ({ children, width = "xl", height = "max" }, ref) => {
    const modalSizes = {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-5xl",
      full: "max-w-full",
    };

    const maxHeightStyles = {
      xs: "max-h-40",
      sm: "max-h-48",
      md: "max-h-56",
      lg: "max-h-64",
      xl: "max-h-96",
      max: "max-h-max",
      full: "h-full",
    };

    return (
      <div
        ref={ref}
        className={`fixed inset-0 m-auto overflow-auto p-8 bg-white rounded-lg shadow-lg ${modalSizes[width]} ${maxHeightStyles[height]} `}
      >
        {children}
      </div>
    );
  }
);

const Overlay = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-backdrop backdrop-filter backdrop-blur-sm">
      {children}
    </div>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-3 right-5 bg-transparent border-none p-1 rounded-sm translate-x-2 transition-all duration-200 hover:bg-gray-100"
    >
      {children}
    </button>
  );
};

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({
  children,
  opens: opensWindow,
  width = "xl",
  height = "max",
}) => {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => open({ name: opensWindow, width, height }),
  });
};

const Window = ({ children, name }) => {
  const { close, openName } = useContext(ModalContext);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    };

    document.addEventListener("click", handleClick, true); // true: capture phase
    return () => document.removeEventListener("click", handleClick, true);
  }, [close]);

  if (!openName || name !== openName.name) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref} width={openName.width} height={openName.height}>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onModalClose: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
