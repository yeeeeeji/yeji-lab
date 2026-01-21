import type { TodoItem } from '../../../../types/todo.type';
import {
  toggleTodoItem,
  updateTodoItemText,
  deleteTodoItem,
  addTodoItem,
  removeEmptyTodoIfMultiple,
} from '../../../../utils/todoDomain';

interface UseTodoInteractionsProps {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  setEditingTodoId: React.Dispatch<React.SetStateAction<string | null>>;
}

/**
 * 할 일 도메인의 사용자 상호작용만 담당
 * 단일 책임: 할 일 관련 사용자 상호작용
 */
export const useTodoInteractions = ({
  todos,
  setTodos,
  setEditingTodoId,
}: UseTodoInteractionsProps) => {
  // 할 일 체크/해제
  const toggleTodo = (id: string) => {
    setTodos((prev) => toggleTodoItem(prev, id));
  };

  // 할 일 텍스트 변경
  const updateTodoText = (id: string, text: string) => {
    setTodos((prev) => updateTodoItemText(prev, id, text));
  };

  // 할 일 입력 핸들러
  const handleTodoKeyDown = (
    id: string,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const currentTodo = todos.find((t) => t.id === id);
      const currentIndex = todos.findIndex((t) => t.id === id);

      if (currentTodo && currentTodo.text.trim() !== '') {
        // 텍스트가 있으면 새 항목 추가
        const { todos: newTodos, newId } = addTodoItem(todos, currentIndex);
        setTodos(newTodos);
        setEditingTodoId(newId);

        // 다음 입력 필드에 포커스 (사이드 이펙트)
        setTimeout(() => {
          const nextInput = document.querySelector(
            `[data-todo-id="${newId}"]`,
          ) as HTMLInputElement | null;
          if (nextInput) {
            nextInput.focus();
          }
        }, 0);
      } else {
        // 빈 텍스트에서 엔터를 누르면
        const newTodos = removeEmptyTodoIfMultiple(todos, id);
        if (newTodos.length !== todos.length) {
          setTodos(newTodos);

          // 다음 항목에 포커스 (사이드 이펙트)
          const nextTodo =
            newTodos[currentIndex] ?? newTodos[currentIndex - 1];
          if (nextTodo) {
            setTimeout(() => {
              const nextInput = document.querySelector(
                `[data-todo-id="${nextTodo.id}"]`,
              ) as HTMLInputElement | null;
              if (nextInput) {
                nextInput.focus();
              }
            }, 0);
          }
        }
      }
    }
  };

  // 할 일 포커스 핸들러
  const handleTodoFocus = (id: string) => {
    setEditingTodoId(id);
  };

  // 할 일 블러 핸들러
  const handleTodoBlur = (id: string) => {
    // 약간의 지연을 두어 클릭 이벤트가 먼저 처리되도록
    setTimeout(() => {
      const newTodos = removeEmptyTodoIfMultiple(todos, id);
      if (newTodos.length !== todos.length) {
        setTodos(newTodos);
      }
      setEditingTodoId(null);
    }, 200);
  };

  // 할 일 삭제
  const deleteTodo = (id: string) => {
    setTodos((prev) => deleteTodoItem(prev, id));
  };

  return {
    toggleTodo,
    updateTodoText,
    handleTodoKeyDown,
    handleTodoFocus,
    handleTodoBlur,
    deleteTodo,
  };
};
