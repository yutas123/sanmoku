export default function MyApp() {
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  
  const listItems = products.map(product =>
    product.id >= 2 ? (
    <li key={product.id}>
      {product.title}
    </li>
    ) : null
  );
  
  return (
    <ul>{listItems}</ul>
  );
}
