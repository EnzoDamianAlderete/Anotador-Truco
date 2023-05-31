import React from 'react';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps>  = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex flex-col bg-black bg-opacity-60 w-full h-screen absolute top-0">
      <div className="bg-amber-950 w-72 h-80 p-8 mt-36 rounded-md self-center">
        {children}
      </div>
    </div>
  );
};

export default Modal;