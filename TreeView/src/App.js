import "./styles.css";
import explorer from "./data";
import TreeView from "./TreeView";

export default function App() {
  return (
    <div className="App">
      <h1>Tree</h1>
      {explorer.map((row) => {
        return <TreeView data={row} />;
      })}
    </div>
  );
}
