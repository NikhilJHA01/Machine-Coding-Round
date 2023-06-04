import "./styles.css";
import people from "./data";
import Carousal from "./Carousal";

export default function App() {
  return (
    <div className="App">
      <h1>Carousal</h1>
      <Carousal data={people} />
    </div>
  );
}
