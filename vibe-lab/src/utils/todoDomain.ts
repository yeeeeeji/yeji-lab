import type { TodoItem } from '../types/todo.type';

/**
 * 할 일 도메인 로직
 * 순수 함수만 포함 (상태 변경 없음)
 */

/**
 * 할 일을 토글합니다.
 */
export const toggleTodoItem = (todos: TodoItem[], id: string): TodoItem[] => {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );
};

/**
 * 할 일의 텍스트를 업데이트합니다.
 */
export const updateTodoItemText = (
  todos: TodoItem[],
  id: string,
  text: string,
): TodoItem[] => {
  return todos.map((todo) => (todo.id === id ? { ...todo, text } : todo));
};

/**
 * 할 일을 삭제합니다.
 */
export const deleteTodoItem = (todos: TodoItem[], id: string): TodoItem[] => {
  return todos.filter((todo) => todo.id !== id);
};

/**
 * 새 할 일을 생성합니다.
 */
export const createTodoItem = (): TodoItem => {
  return { id: String(Date.now()), text: '', completed: false };
};

/**
 * 할 일 목록에 새 항목을 추가합니다.
 */
export const addTodoItem = (
  todos: TodoItem[],
  insertAfterIndex: number,
): { todos: TodoItem[]; newId: string } => {
  const newItem = createTodoItem();
  const newTodos = [
    ...todos.slice(0, insertAfterIndex + 1),
    newItem,
    ...todos.slice(insertAfterIndex + 1),
  ];
  return { todos: newTodos, newId: newItem.id };
};

/**
 * 빈 할 일 항목들을 필터링합니다.
 */
export const getEmptyTodos = (todos: TodoItem[]): TodoItem[] => {
  return todos.filter((t) => t.text.trim() === '' && !t.completed);
};

/**
 * 빈 할 일 항목을 제거합니다 (최소 하나는 유지).
 */
export const removeEmptyTodoIfMultiple = (
  todos: TodoItem[],
  id: string,
): TodoItem[] => {
  const emptyTodos = getEmptyTodos(todos);
  if (emptyTodos.length > 1) {
    return todos.filter((t) => t.id !== id);
  }
  return todos;
};
