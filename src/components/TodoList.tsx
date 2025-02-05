// components/TodoList.tsx
import { useState, useReducer, useRef, useMemo, useCallback } from "react";

// Todo の型
type Todo = {
  id: number;
  text: string;
};

// アクションの型を Union 型で定義
type TodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "REMOVE_TODO"; payload: number };

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // ToDo を追加
  const addTodo = useCallback(() => {
    if (inputValue.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: inputValue });
    setInputValue("");
    inputRef.current?.focus();
  }, [inputValue]);

  // 完了済みの ToDo 数を計算
  const completedCount = useMemo(() => todos.length, [todos]);

  return (
    <div>
      <h2>ToDo リスト</h2>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_TODO", payload: todo.id })
              }
            >
              削除
            </button>
          </li>
        ))}
      </ul>
      <p>合計: {completedCount} 件</p>
    </div>
  );
};

export default TodoList;
