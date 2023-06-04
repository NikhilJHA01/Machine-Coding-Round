import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(false);
  let interval = useRef(null);

  useEffect(() => {
    console.log("mouting");
    startTimer();
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  const startTimer = () => {
    interval.current = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    if (pause) setPause(false);
  };

  const resetTimer = () => {
    clearInterval(interval.current);
    setPause(true);
    setCounter(0);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
    setPause(true);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={pause ? startTimer : stopTimer}>
          {pause ? "Start" : "Stop"}
        </button>
        <button onClick={() => resetTimer()}>Reset</button>
      </div>
    </div>
  );
}
