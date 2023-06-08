import { useEffect, useRef, useState } from "react";
import "./styles.css";
const people = ["Jesse", "John", "Jesse", "John", "Jesse"];
export default function App() {
  const [data, setData] = useState(people);
  const loadMore = () => {
    console.log("loading more");
    const temp = Array.from(Array(5).keys(), (n) => "John");
    setData([...data, ...temp]);
  };
  return (
    <div className="App">
      <h1>Table</h1>
      <DataTable data={data} loadMore={loadMore} />
    </div>
  );
}

const DataTable = ({ data, loadMore }) => {
  const ref = useRef(null);
  const onScreen = useIntersectionObserver(ref, { threshold: 0.5 });

  useEffect(() => {
    if (onScreen) loadMore();
  }, [onScreen]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>{onScreen ? "on Screen" : "Scroll More"}</tr>

        {data.map((val, i) =>
          i !== data.length - 1 ? (
            <tr key={`${i}_${val}`}>
              <td>{i}</td>
              <td>{val}</td>
            </tr>
          ) : (
            <tr ref={ref} key={`${i}_${val}`}>
              <td>{i}</td>
              <td>{val}</td>
            </tr>
          )
        )}
        <tr ref={ref}>Loading...</tr>
        <tr>{onScreen ? "on Screen" : "Scroll More"}</tr>
      </tbody>
    </table>
  );
};

const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};
