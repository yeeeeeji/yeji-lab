import { ModalConfirmButton } from "../../../../components/ModalConfirmButton/ModalConfirmButton";
import { ModalOverlay } from "../../../../components/ModalOverlay/ModalOverlay";
import { WishModalStyle } from "./WishModalStyle.styled";

export const WishModal = () => {
  return (
    <>
      <ModalOverlay />
      <WishModalStyle>
        <ModalConfirmButton text="등록" />
      </WishModalStyle>
      ;
    </>
  );
};
