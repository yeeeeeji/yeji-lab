import { ModalConfirmButton } from "../ModalConfirmButton/ModalConfirmButton";
import { ModalContainer } from "../ModalContainer/ModalContainer";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

interface ModalProps {
  children?: React.ReactNode;
  confirmText: string;
}

export const Modal = ({ children, confirmText }: ModalProps) => {
  return (
    <>
      <ModalOverlay />
      <ModalContainer>
        {children}
        <ModalConfirmButton text={confirmText} />
      </ModalContainer>
    </>
  );
};
