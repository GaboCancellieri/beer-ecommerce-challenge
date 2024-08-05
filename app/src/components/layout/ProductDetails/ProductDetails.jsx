export default function ProductDetails({ product, variants }) {
  return (
    <div>
      <img src={product.image} alt={product.brand} />
      <h1>{product.brand}</h1>
      <p>{product.information}</p>
      {variants.map((variant) => (
        <div key={variant.sku}>
          <p>{variant.name}</p>
          <p>Stock: {variant.stock}</p>
          <p>Price: ${variant.price / 100}</p>
        </div>
      ))}
    </div>
  );
}
