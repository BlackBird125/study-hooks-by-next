// components/ThemeSwitcher.tsx
import { useTheme } from "../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      現在のテーマ: {theme}（クリックで切り替え）
    </button>
  );
};

export default ThemeSwitcher;
