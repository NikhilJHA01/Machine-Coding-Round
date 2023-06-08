import { useEffect, useState } from "react";
import "./styles.css";
import { Loader } from "./Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      <h1>Loader</h1>
      {loading ? (
        <Loader fullscreen={false} />
      ) : (
        <h2>Start editing to see some magic happen!</h2>
      )}
    </div>
  );
}
