import "./styles.css";
import Timer from "./Timer";

export default function App() {
  const onComplete = () => {
    console.log("Completed");
  };
  return (
    <div className="App">
      <h1>Countdown</h1>
      <Timer expiresIn="100000" onComplete={onComplete} />
    </div>
  );
}
