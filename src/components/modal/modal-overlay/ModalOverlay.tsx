import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalOverlayProps } from "../lib/types";
import styles from "./ModalOverlay.module.css";

export const ModalOverlay = ({ onClose, children }: ModalOverlayProps) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      {children}
    </div>,
    document.getElementById("root") || document.body
  );
};
