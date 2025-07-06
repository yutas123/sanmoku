import { useState } from "react";

function FruitList() {
  const [fruits, setFruits] = useState(["りんご", "バナナ", "みかん"]);

  const handleAddFruit = () => {
    setFruits([...fruits, "もも"]);
  };

  return (
    <div>
      <h2>🍎 果物リスト</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={handleAddFruit}>果物を追加</button>
    </div>
  );
}


export default FruitList;