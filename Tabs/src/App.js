import "./styles.css";
import { tabsData } from "./data";
import Tabs from "./Tabs";

export default function App() {
  return (
    <div className="App">
      <h1>TABS</h1>
      <Tabs currentIndex={0} tabsData={tabsData} />
    </div>
  );
}
