import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
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
  const test = useState(Array(9).fill(null));
  console.log(test);
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