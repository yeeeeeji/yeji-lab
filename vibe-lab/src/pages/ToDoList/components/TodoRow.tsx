import type React from 'react';
import type { TodoItem } from '../../../types/todo.type';

interface TodoRowProps {
  todo: TodoItem;
  onToggle: () => void;
  onChangeText: (text: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  onDelete: () => void;
}

export const TodoRow: React.FC<TodoRowProps> = ({
  todo,
  onToggle,
  onChangeText,
  onKeyDown,
  onFocus,
  onBlur,
  onDelete,
}) => {
  return (
    <div className="flex items-center gap-3 group">
      <button
        type="button"
        onClick={onToggle}
        className={`w-5 h-5 border-2 rounded cursor-pointer flex items-center justify-center transition-all flex-shrink-0 ${
          todo.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-400 hover:border-gray-600'
        }`}
        aria-label={todo.completed ? '할 일 완료 취소' : '할 일 완료'}
      >
        {todo.completed && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>

      <div className="flex-1 relative">
        <input
          type="text"
          value={todo.text}
          onChange={(e) => onChangeText(e.target.value)}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          data-todo-id={todo.id}
          className={`w-full pr-6 outline-none border-b-2 border-transparent hover:border-gray-300 focus:border-gray-500 transition-colors ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
          }`}
          placeholder="할 일을 입력하세요..."
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
          aria-label="할 일 삭제"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
