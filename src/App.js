import { useState } from 'react';

function Square({value, onSquareClick, isWinning}) {
  return (
    <button 
      className={`square ${isWinning ? 'winning-square' : ''}`} 
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlaysss }) {

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlaysss(nextSquares);
    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);
  }

  const winnerInfo = calculateWinner(squares);
  let status;
  if (winnerInfo) {
    status = 'Winner: ' + winnerInfo.winner;
  } else if (squares.every(square => square !== null)) {
    status = 'Draw! The game is tied.';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const boardRows = [];
  for (let row = 0; row < 3; row++) {
    const squareButtons = [];
    for (let col = 0; col < 3; col++) {
      const squareIndex = row * 3 + col;
      const isWinning = winnerInfo && winnerInfo.winningLine.includes(squareIndex);
      squareButtons.push(
        <Square 
          key={squareIndex}
          value={squares[squareIndex]} 
          onSquareClick={() => handleClick(squareIndex)}
          isWinning={isWinning}
        />
      );
    }
    boardRows.push(
      <div key={row} className="board-row">
        {squareButtons}
      </div>
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {boardRows}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const currentSquareS = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlaya(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // TODO
  }

  let moves = history.map((squares, move) => {
    console.log(squares);
    console.log(move + `move`);
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    
    if (move === currentMove) {
      return (
        <li key={move}>
          <span className="current-move">You are at move #{move}</span>
        </li>
      );
    }
    
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  if (!isAscending) {
    moves = moves.slice().reverse();
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquareS} onPlaysss={handlePlaya}/>
      </div>
      <div className="game-info">
        <button 
          className="sort-toggle" 
          onClick={() => setIsAscending(!isAscending)}
        >
          Sort {isAscending ? 'Descending' : 'Ascending'}
        </button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        winningLine: [a, b, c]
      };
    }
  }
  return null;
}
