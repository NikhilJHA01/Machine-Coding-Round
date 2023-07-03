import { useState } from "react";

const UPPER_CASES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_CASES = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()";

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (checkboxData, length) => {
    let charset = "";
    let generatedPassword = "";
    const selectedOption = checkboxData.filter((checkbox) => checkbox.state);

    if (selectedOption.length === 0) {
      setErrorMessage("Select at least one option.");
      setPassword("");
      return;
    }

    selectedOption.forEach((option) => {
      if (length === 0) return;
      let randomIndex;
      switch (option.title) {
        case "Include Uppercase Letters":
          randomIndex = Math.floor(Math.random() * 26);
          charset += UPPER_CASES;
          generatedPassword += UPPER_CASES.charAt(randomIndex);
          length--;
          break;
        case "Include Lowercase Letters":
          randomIndex = Math.floor(Math.random() * 26);
          charset += LOWER_CASES;
          generatedPassword += LOWER_CASES.charAt(randomIndex);
          length--;
          break;
        case "Include Numbers":
          randomIndex = Math.floor(Math.random() * 10);
          charset += NUMBERS;
          generatedPassword += NUMBERS.charAt(randomIndex);
          length--;
          break;
        case "Include Symbols":
          randomIndex = Math.floor(Math.random() * 9);
          charset += SYMBOLS;
          generatedPassword += SYMBOLS.charAt(randomIndex);
          length--;
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage("");
  };

  return {
    password,
    errorMessage,
    generatePassword
  };
};
