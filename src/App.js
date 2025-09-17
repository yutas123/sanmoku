import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  function CountAdd(){
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={CountAdd}> click {count} 回数</button>
      <button onClick={CountAdd}> click {count} 回数</button>
    </div>
  );
}

  