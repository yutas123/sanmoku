import { useState } from 'react';

function Square() {
  const [value, setValued] = useState(null);
  function handleClick() {
    setValued('X');
    // console.log(value);
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));  
  const Arara = useState(Array(9).fill(null));
  console.log(squares);
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}