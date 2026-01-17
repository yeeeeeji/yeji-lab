import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

function Day1() {
  const [title, setTitle] = useState('To Do List');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [todos, setTodos] = useState<TodoItem[]>([{ id: '1', text: '', completed: false }]);
  const [editingTodoId, setEditingTodoId] = useState<string | null>('1');
  const [hoveredTodoId, setHoveredTodoId] = useState<string | null>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // 오늘 날짜를 기본값으로 설정
  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  // 제목 편집 모드일 때 포커스
  useEffect(() => {
    if (isEditingTitle && titleInputRef.current) {
      titleInputRef.current.focus();
      titleInputRef.current.select();
    }
  }, [isEditingTitle]);

  // 달력 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  // 날짜 포맷팅 (mm/dd 형식)
  const formatDate = (date: Date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}`;
  };

  // 제목 저장
  const handleTitleBlur = () => {
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditingTitle(false);
    }
  };

  // 할 일 체크/해제
  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // 할 일 텍스트 변경
  const updateTodoText = (id: string, text: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text } : todo
    ));
  };

  // 할 일 입력 핸들러
  const handleTodoKeyDown = (id: string, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const currentTodo = todos.find(t => t.id === id);
      const currentIndex = todos.findIndex(t => t.id === id);
      
      if (currentTodo && currentTodo.text.trim() !== '') {
        // 텍스트가 있으면 새 항목 추가
        const newId = String(Date.now());
        const newTodos = [
          ...todos.slice(0, currentIndex + 1),
          { id: newId, text: '', completed: false },
          ...todos.slice(currentIndex + 1)
        ];
        setTodos(newTodos);
        setEditingTodoId(newId);
        
        // 다음 입력 필드에 포커스
        setTimeout(() => {
          const nextInput = document.querySelector(`[data-todo-id="${newId}"]`) as HTMLInputElement;
          if (nextInput) {
            nextInput.focus();
          }
        }, 0);
      } else {
        // 빈 텍스트에서 엔터를 누르면
        const emptyTodos = todos.filter(t => t.text.trim() === '' && !t.completed);
        
        if (emptyTodos.length > 1) {
          // 다른 빈 항목이 있으면 현재 항목 삭제
          setTodos(todos.filter(t => t.id !== id));
          // 다음 항목에 포커스
          const nextTodo = todos[currentIndex + 1] || todos[currentIndex - 1];
          if (nextTodo) {
            setTimeout(() => {
              const nextInput = document.querySelector(`[data-todo-id="${nextTodo.id}"]`) as HTMLInputElement;
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
      const currentTodo = todos.find(t => t.id === id);
      if (currentTodo && currentTodo.text.trim() === '' && !currentTodo.completed) {
        const emptyTodos = todos.filter(t => t.text.trim() === '' && !t.completed);
        if (emptyTodos.length > 1) {
          setTodos(todos.filter(t => t.id !== id));
        }
      }
      setEditingTodoId(null);
    }, 200);
  };

  // 할 일 삭제
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  // 날짜 선택 핸들러
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
    setShowCalendar(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: '#D7E9D3' }}>
      {/* 홈으로 돌아가기 버튼 - 왼쪽 상단 */}
      <Link
        to="/"
        className="absolute top-8 left-8 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
      >
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Link>

      <div 
        className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative flex flex-col"
        style={{ width: '679px', height: '740px' }}
      >
        {/* 날짜 표시 및 달력 */}
        <div className="relative flex justify-end mb-4">
          <button
            onClick={() => setShowCalendar(!showCalendar)}
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
                value={selectedDate.toISOString().split('T')[0]}
                onChange={handleDateChange}
                className="outline-none"
              />
            </div>
          )}
        </div>

        {/* 제목 */}
        <div className="text-center mb-8">
          {isEditingTitle ? (
            <input
              ref={titleInputRef}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleTitleBlur}
              onKeyDown={handleTitleKeyDown}
              className="text-3xl font-bold text-gray-800 text-center bg-transparent border-b-2 border-gray-400 outline-none w-full max-w-md mx-auto"
            />
          ) : (
            <h1
              onClick={() => setIsEditingTitle(true)}
              className="text-3xl font-bold text-gray-800 cursor-pointer hover:text-gray-600 transition-colors"
            >
              {title}
            </h1>
          )}
        </div>

        {/* 할 일 리스트 - 스크롤 가능 */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2">
          {todos.map((todo) => (
            <div 
              key={todo.id} 
              className="flex items-center gap-3 group"
              onMouseEnter={() => setHoveredTodoId(todo.id)}
              onMouseLeave={() => setHoveredTodoId(null)}
            >
              <div
                onClick={() => toggleTodo(todo.id)}
                className={`w-5 h-5 border-2 rounded cursor-pointer flex items-center justify-center transition-all flex-shrink-0 ${
                  todo.completed
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-400 hover:border-gray-600'
                }`}
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
              </div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => updateTodoText(todo.id, e.target.value)}
                  onKeyDown={(e) => handleTodoKeyDown(todo.id, e)}
                  onFocus={() => handleTodoFocus(todo.id)}
                  onBlur={() => handleTodoBlur(todo.id)}
                  data-todo-id={todo.id}
                  className={`w-full outline-none border-b-2 border-transparent hover:border-gray-300 focus:border-gray-500 transition-colors ${
                    todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
                  }`}
                  placeholder="할 일을 입력하세요..."
                />
                {/* 삭제 버튼 - 호버 시 표시 */}
                {hoveredTodoId === todo.id && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTodo(todo.id);
                    }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Day1;
