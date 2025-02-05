// pages/index.tsx
import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function Home() {
  const [message, setMessage] = useState("");

  // useEffect を使ってマウント時にデータを取得
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setMessage(`API から取得: ${data.title}`));
  }, []);

  return (
    <ThemeProvider>
      <div>
        <h1>Next.js + React Hooks サンプル</h1>
        <p>{message}</p>
        <ThemeSwitcher />
        <TodoList />
      </div>
    </ThemeProvider>
  );
}
