import { AddWishButtonStyle } from "./AddWishButtonStyle.styled";

interface AddWishButtonProps {
  onClick?: () => void;
}

export const AddWishButton = ({ onClick }: AddWishButtonProps) => {
  return <AddWishButtonStyle onClick={onClick}>Add Wish</AddWishButtonStyle>;
};
