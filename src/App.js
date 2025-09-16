export default function MyApp() {
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  
  // ifにはreturnを書くのを忘れずに
  // 条件(三項)演算子は暗黙的にreturnされるので必要ない  
  const listItems = products.map(product => {
    if(product.id >= 2){
      return <li key={product.id}>{product.title}</li>;
    } else {
      return null;
    }
  }
  );
  
  return (
    <ul>{listItems}</ul>
  );
}
