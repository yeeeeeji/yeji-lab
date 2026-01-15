import { ModalConfirmButton } from "../ModalConfirmButton/ModalConfirmButton";
import { ModalContainer } from "../ModalContainer/ModalContainer";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

interface ModalProps {
  children?: React.ReactNode;
  confirmText: string;
  onConfirm?: () => void;
}

export const Modal = ({ children, confirmText, onConfirm }: ModalProps) => {
  return (
    <>
      <ModalOverlay />
      <ModalContainer>
        {children}
        <ModalConfirmButton text={confirmText} onClick={onConfirm} />
      </ModalContainer>
    </>
  );
};
