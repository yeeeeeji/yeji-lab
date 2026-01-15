import { useState } from "react";
import { Modal } from "../../../../components/Modal/Modal";

export interface Wish {
  title: string;
  content: string;
  date: string;
}

interface WishModalProps {
  onSubmit: (wish: Wish) => void;
}

export const WishModal = ({ onSubmit }: WishModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleConfirm = () => {
    if (!title.trim() || !content.trim()) {
      // 간단한 유효성 검사: 둘 중 하나라도 비어 있으면 등록하지 않음
      return;
    }

    const now = new Date().toISOString();

    onSubmit({
      title,
      content,
      date: now,
    });

    // 등록 후 입력값 초기화
    setTitle("");
    setContent("");
  };

  const formattedNow = new Date().toLocaleString();

  return (
    <Modal confirmText="등록하기" onConfirm={handleConfirm}>
      <div>
        <div>
          <label>
            제목
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
          </label>
        </div>
        <div>
          <label>
            내용
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
            />
          </label>
        </div>
        <div>
          <label>
            등록 일시
            <input type="text" value={formattedNow} readOnly />
          </label>
        </div>
      </div>
    </Modal>
  );
};
