import { HiXMark } from "react-icons/hi2";

const StyledModal = ({ children }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-0 rounded-lg shadow-lg p-8 transition-all duration-500">
      {children}
    </div>
  );
};

const Overlay = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-backdrop backdrop-filter backdrop-blur-sm z-1000 transition-all duration-500">
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

const Modal = ({ children, onClose }) => {
  return (
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>
  );
};

export default Modal;
