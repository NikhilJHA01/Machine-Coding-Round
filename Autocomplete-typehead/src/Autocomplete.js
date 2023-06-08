import { useState, useRef, useEffect } from "react";
const cityNames = [
  "Amsterdam",
  "Berlin",
  "London",
  "New York",
  "Paris",
  "Rome",
  "San Francisco",
  "Tokyo",
  "Washington DC",
  "Zurich",
  "Copenhagen",
  "Helsinki",
  "Madrid",
  "Reykjavik",
  "Stockholm",
  "Vancouver",
  "Vienna",
  "Zagreb",
  "Budapest",
  "Dublin",
  "Hamburg",
  "Krakow",
  "Lisbon",
  "Ljubljana"
];

const Autocomplete = () => {
  const [data] = useState(cityNames);
  const [filteredData, setfilteredData] = useState(cityNames);
  const [value, setValue] = useState("");
  const autocompleteRef = useRef(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const debounce = function (fn) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      let context = this;
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    setValue(value);
    const optimised = debounce(fun);
    optimised(value);
  };

  const fun = (value) => {
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setfilteredData(filteredData);
  };

  const handleClick = (value) => {
    setValue(value);
    setShow(false);
  };
  return (
    <>
      <div className="autocomplete" ref={autocompleteRef}>
        <input
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          placeholder="Type to Search"
          onFocus={() => setShow(true)}
        />
        {show && (
          <ul>
            {filteredData.map((row) => {
              return <li onClick={() => handleClick(row)}>{row}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Autocomplete;
