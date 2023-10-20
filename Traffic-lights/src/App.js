import "./styles.css";
import { useEffect, useState } from "react";

const trafficLights = [
  {
    color: "red",
    bgColorClass: "background-red",
    next: "green",
    wait: 4000
  },
  {
    color: "yellow",
    bgColorClass: "background-yellow",
    next: "red",
    wait: 500
  },
  {
    color: "green",
    bgColorClass: "background-green",
    next: "yellow",
    wait: 3000
  }
];

export default function App() {
  const [activeLight, setActiveLight] = useState("green");
  const light = trafficLights.find((light) => light.color === activeLight);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveLight(light.next);
    }, [light.wait]);

    return () => clearTimeout(timer);
  }, [light, activeLight]);
  return (
    <div className="App">
      <h1>Traffic Lights</h1>
      <div className="trafficLight-container">
        {trafficLights.map((light) => (
          <div
            key={light.color}
            className={`trafficLight ${
              activeLight === light.color
                ? light.bgColorClass
                : `background-grey`
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
