import "./styles.css";
import questions from "./data";
import Accordion from "./Accordion";

export default function App() {
  return (
    <div className="App">
      <h1>Accordion</h1>

      {questions.map((question) => {
        return <Accordion {...question} />;
      })}
    </div>
  );
}
