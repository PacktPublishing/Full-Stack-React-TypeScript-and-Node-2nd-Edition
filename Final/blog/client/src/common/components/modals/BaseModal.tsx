import { ReactNode } from "react";
import ReactModal from "react-modal"; // needed to pass jest tests

interface ModalProps {
  isOpen: boolean;
  toggleOpen: () => void;
  width: string;
  height: string;
  children: ReactNode;
  overlayClickClose?: boolean;
  className?: string;
}

export default function BaseModal({
  isOpen,
  toggleOpen,
  width,
  height,
  children,
  overlayClickClose = false,
  className = "modal-container",
}: ModalProps) {
  return (
    <ReactModal
      className={className}
      style={{ content: { width, height } }}
      isOpen={isOpen}
      onRequestClose={toggleOpen}
      shouldCloseOnOverlayClick={overlayClickClose}
    >
      {children}
    </ReactModal>
  );
}
