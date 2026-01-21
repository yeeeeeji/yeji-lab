import { useState } from 'react';
import type { TodoItem } from '../../../../types/todo.type';

/**
 * 할 일 도메인의 상태 관리만 담당
 * 단일 책임: 할 일 상태 관리
 */
export const useTodoState = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: '1', text: '', completed: false },
  ]);
  const [editingTodoId, setEditingTodoId] = useState<string | null>('1');

  return {
    todos,
    setTodos,
    editingTodoId,
    setEditingTodoId,
  };
};
