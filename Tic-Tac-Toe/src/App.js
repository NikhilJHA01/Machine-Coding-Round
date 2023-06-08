import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

const Board = () => {
  const [data, setData] = useState(Array(9).fill(null));
  const nextPlayer = data.filter(Boolean).length % 2 === 0 ? "X" : "O";

  const winner = calculateWinner(data);
  const squareSelected = (square) => {
    console.log(square);

    const temp = [...data];
    console.log(temp);
    temp[square] = nextPlayer;
    setData(temp);
  };

  const resetGame = () => {
    setData(Array(9).fill(null));
  };
  const status = () => {
    return winner ? `Winner is ${winner}` : `NextPlayer is ${nextPlayer}`;
  };

  const squareData = (square) => {
    return (
      <div
        className="column"
        onClick={!data[square] ? () => squareSelected(square) : null}
      >
        {data[square]}
      </div>
    );
  };
  return (
    <>
      <div>{status()}</div>
      <div className="board">
        <div className="row">
          {squareData(0)}
          {squareData(1)}
          {squareData(2)}
        </div>
        <div className="row">
          {squareData(3)}
          {squareData(4)}
          {squareData(5)}
        </div>
        <div className="row">
          {squareData(6)}
          {squareData(7)}
          {squareData(8)}
        </div>
      </div>

      <button className="reset" onClick={resetGame}>
        Reset Game
      </button>
    </>
  );
};

const calculateWinner = (data) => {
  const ans = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  for (let row of ans) {
    let [x, y, z] = row;
    if (data[x] && data[x] === data[y] && data[y] === data[z]) {
      return data[x];
    }
  }
  return null;
};
