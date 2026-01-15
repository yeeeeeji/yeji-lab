import { useState } from "react";
import { MainContainer, MainContent } from "../styles/Layout.styled";
import { Header } from "../components/Header/Header";
import { AddWishButton } from "../features/wishes/components/AddWishButton/AddWishButton";
import { WishModal } from "../features/wishes/components/WishModal/WishModal";
import type { Wish } from "../features/wishes/components/WishModal/WishModal";

export const Wishes = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleAddWish = (wish: Wish) => {
    setWishes((prev) => [...prev, wish]);
    setIsModalOpen(false);
  };

  return (
    <MainContainer>
      <Header title="Wishes" />
      <MainContent>
        <AddWishButton onClick={handleOpenModal} />
        {isModalOpen && <WishModal onSubmit={handleAddWish} />}
        <div>
          {wishes.map((wish, index) => (
            <div key={index}>
              <h3>{wish.title}</h3>
              <p>{wish.content}</p>
              <small>{new Date(wish.date).toLocaleString()}</small>
            </div>
          ))}
        </div>
      </MainContent>
    </MainContainer>
  );
};
