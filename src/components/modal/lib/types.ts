export interface ModalProps {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export interface ModalOverlayProps {
  onClose: () => void;
  children: React.ReactNode;
}
