import { ModalConfirmButtonStyle } from "./ModalConfirmButtonStyle.styled";

interface ModalConfirmButtonProps {
  text: string;
}

export const ModalConfirmButton = ({ text }: ModalConfirmButtonProps) => {
  return <ModalConfirmButtonStyle>{text}</ModalConfirmButtonStyle>;
};
