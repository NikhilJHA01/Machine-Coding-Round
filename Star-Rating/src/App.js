import StarRating from "./StarRating";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Star Rating</h1>
      <h2>Start editing to see some magic happen!</h2>
      <StarRating value={2} total={5} />
    </div>
  );
}
