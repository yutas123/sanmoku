function FruitList() {
  const fruits = ["りんご", "バナナ", "みかん"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}}</li>
      ))}
    </ul>
  );
}

export default App;