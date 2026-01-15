import { ModalConfirmButtonStyle } from "./ModalConfirmButtonStyle.styled";

interface ModalConfirmButtonProps {
  text: string;
  onClick?: () => void;
}

export const ModalConfirmButton = ({ text, onClick }: ModalConfirmButtonProps) => {
  return <ModalConfirmButtonStyle onClick={onClick}>{text}</ModalConfirmButtonStyle>;
};
