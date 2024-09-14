import { CSSProperties, ReactNode, useEffect, useRef } from "react";
import "../../../theme/modal.css";

interface ModalProps {
  isOpen: boolean;
  toggleOpen: () => void;
  children: ReactNode;
  overlayClickClose?: boolean;
  /// note: do not override display attribute as it causes a white box to always show
  style?: CSSProperties;
}

export default function Modal({
  isOpen,
}: // toggleOpen,
// children,
// style,
// overlayClickClose = false,
ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) return;

    if (isOpen) {
      console.log("showModal");
      dialogElement.showModal();
    } else {
      console.log("close modal");
      dialogElement.close();
    }
  }, [isOpen]);

  // const onClickOut = (e: React.MouseEvent<HTMLDialogElement>) => {
  //   e.preventDefault();

  //   if (!overlayClickClose) return;

  //   const dialogElement = dialogRef.current;
  //   if (!dialogElement) return;

  //   const rect = dialogElement.getBoundingClientRect();
  //   const isInDialog =
  //     rect.top <= e.clientY &&
  //     e.clientY <= rect.top + rect.height &&
  //     rect.left <= e.clientX &&
  //     e.clientX <= rect.left + rect.width;
  //   if (!isInDialog) {
  //     toggleOpen();
  //   }
  // };

  return null;
  // return (
  //   <dialog
  //     ref={dialogRef}
  //     style={style}
  //     onClick={onClickOut}
  //     className="modal-container"
  //   >
  //     {children}
  //   </dialog>
  // );
}
