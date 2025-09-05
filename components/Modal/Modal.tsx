import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { useEffect, type ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  //* Esc closure
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  //* Backdrop click closure
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  //* Prevent scroll
  useEffect(() => {
    document.body.classList.add(css.noScroll);
    return () => {
      document.body.classList.remove(css.noScroll);
    };
  }, []);

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
