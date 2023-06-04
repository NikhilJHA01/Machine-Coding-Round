import { useEffect, useRef, useState } from "react";

const Carousal = ({ data }) => {
  const [active, setActive] = useState(0);
  const interval = useRef(null);
  useEffect(() => {
    start();
    return () => clearInterval(interval.current);
  }, []);

  const start = () => {
    interval.current = setInterval(() => {
      setActive((prev) => {
        if (prev === data.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 3000);
  };

  const stop = () => {
    if (interval.current) clearInterval(interval.current);
  };

  const nextSlide = () => {
    stop();
    setActive((prev) => {
      if (prev === data.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const prevSlide = () => {
    stop();
    setActive((prev) => {
      if (prev === 0) {
        return data.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className="carousal">
      {data.map((item, index) => {
        return (
          <div
            key={item.id}
            className={
              active === index ? "carousal-item active" : "carousal-item"
            }
          >
            <img
              onMouseLeave={start}
              onMouseOver={stop}
              src={item.image}
              alt={item.title}
            ></img>
          </div>
        );
      })}

      <button className="prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};
export default Carousal;
