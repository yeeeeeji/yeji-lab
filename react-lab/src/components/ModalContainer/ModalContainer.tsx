import { ModalContainerStyle } from "./ModalContainerStyle.styled";

interface ModalContainerProps {
  children: React.ReactNode;
}

export const ModalContainer = ({ children }: ModalContainerProps) => {
  return <ModalContainerStyle>{children}</ModalContainerStyle>;
};
