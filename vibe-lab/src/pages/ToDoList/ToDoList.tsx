import { useRef } from "react";
import { TodoRow } from "./components/TodoRow";
import BackButton from "../../components/layout/BackButton";
import { useDateState } from "../../hooks/pages/ToDoList/date/useDateState";
import { useDateInteractions } from "../../hooks/pages/ToDoList/date/useDateInteractions";
import { useTodoState } from "../../hooks/pages/ToDoList/todo/useTodoState";
import { useTodoInteractions } from "../../hooks/pages/ToDoList/todo/useTodoInteractions";
import { formatDate } from "../../utils/dateUtils";
import { useThemeState } from "../../hooks/pages/ToDoList/theme/useTheme";
import { useThemeInteractions } from "../../hooks/pages/ToDoList/theme/useThemeInteractions";
import ThemeButton from "./components/ThemeButton";
import ThemeModal from "./components/ThemeModal";

function ToDoList() {
  const calendarRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);

  // 날짜 도메인
  const { selectedDate, showCalendar, setShowCalendar, setSelectedDate } =
    useDateState();
  const { handleDateChange } = useDateInteractions({
    setSelectedDate,
    showCalendar,
    setShowCalendar,
    calendarRef,
  });

  // 할 일 도메인
  const { todos, setTodos, setEditingTodoId } = useTodoState();
  const {
    toggleTodo,
    updateTodoText,
    handleTodoKeyDown,
    handleTodoFocus,
    handleTodoBlur,
    deleteTodo,
  } = useTodoInteractions({
    todos,
    setTodos,
    setEditingTodoId,
  });

  // 커스터마이징 모달
  const { showTheme, setShowTheme, title, setTitle, bgColor, setBgColor } =
    useThemeState();
  const { handleShowTheme, handleTheme, handleBgColor } = useThemeInteractions({
    themeRef,
    showTheme,
    setShowTheme,
    setTitle,
    setBgColor,
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{ backgroundColor: "#D7E9D3" }}
    >
      <BackButton to="/" />

      <div
        className={`p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative flex flex-col`}
        style={{ width: "679px", height: "740px", backgroundColor: bgColor }}
      >
        {/* 날짜 표시 및 달력 */}
        <div className="relative flex justify-end mb-4">
          <button
            type="button"
            onClick={() => setShowCalendar((prev) => !prev)}
            className="text-gray-600 hover:text-gray-800 text-sm font-medium cursor-pointer"
          >
            {formatDate(selectedDate)}
          </button>
          {showCalendar && (
            <div
              ref={calendarRef}
              className="absolute top-8 right-0 z-10 bg-white border border-gray-300 rounded-lg shadow-xl p-4"
            >
              <input
                type="date"
                value={selectedDate.toISOString().split("T")[0]}
                onChange={handleDateChange}
                className="outline-none"
              />
            </div>
          )}
        </div>

        {/* 제목 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        </div>

        {/* 할 일 리스트 - 스크롤 가능 */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2">
          {todos.map((todo) => (
            <TodoRow
              key={todo.id}
              todo={todo}
              onToggle={() => toggleTodo(todo.id)}
              onChangeText={(text) => updateTodoText(todo.id, text)}
              onKeyDown={(e) => handleTodoKeyDown(todo.id, e)}
              onFocus={() => handleTodoFocus(todo.id)}
              onBlur={() => handleTodoBlur(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
        </div>
      </div>
      <ThemeButton onClick={handleShowTheme} />
      {showTheme && (
        <ThemeModal
          ref={themeRef}
          theme={{ title: title, bgColor: bgColor }}
          handleBgColor={handleBgColor}
        />
      )}
    </div>
  );
}

export default ToDoList;
