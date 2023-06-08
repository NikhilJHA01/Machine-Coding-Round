import React, { useState, useRef } from "react";

const ITEM_HEIGHT = 50;
const VISIBLE_ITEMS = 5;

function Item({ index, style }) {
  return <div style={style}>Item {index}</div>;
}

function App() {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(VISIBLE_ITEMS - 1);
  const containerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const newStartIndex = Math.floor(scrollTop / ITEM_HEIGHT);
    const newEndIndex = newStartIndex + VISIBLE_ITEMS - 1;
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  };

  return (
    <div
      ref={containerRef}
      style={{
        height: `${VISIBLE_ITEMS * ITEM_HEIGHT}px`,
        overflow: "auto"
      }}
      onScroll={handleScroll}
    >
      {Array.from({ length: 1000 }, (_, i) => (
        <Item
          key={i}
          index={i}
          style={{
            height: `${ITEM_HEIGHT}px`,
            transform: `translateY(${ITEM_HEIGHT * i}px)`,
            willChange: "transform"
          }}
        />
      )).slice(startIndex, endIndex + 1)}
    </div>
  );
}

export default App;
