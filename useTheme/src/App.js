import "./styles.css";
import useTheme from "./hooks/useTheme";
export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="App">
      <h1>Dark and Light Theme</h1>
      <h1>{theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
