import { useState } from "react";
import "./styles.css";
import { usePasswordGenerator } from "./hooks/usePasswordGenerator";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

export default function App() {
  const [length, setLength] = useState(5);
  const [copied, setCopied] = useState(false);
  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]);

  const handleCheckboxChange = (index) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
    setCheckboxData(updatedCheckboxData);
    console.log(index);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="App">
      <header>
        {password && (
          <>
            <div className="title">{password}</div>
            <button onClick={handleCopy}>{copied ? "Copied" : "Copy"}</button>
          </>
        )}
      </header>

      <main>
        <label>Character Length : {length}</label>
        <input
          type="range"
          min={0}
          max={16}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <div className="checkbox-group">
          {checkboxData.map((checkbox, index) => {
            return (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    value={checkbox.state}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  {checkbox.title}
                </label>
              </div>
            );
          })}
        </div>

        <PasswordStrengthIndicator password={password} />

        {/* Error Handling */}
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        {/* button */}
        <button onClick={() => generatePassword(checkboxData, length)}>
          Generate Password
        </button>
      </main>
    </div>
  );
}
