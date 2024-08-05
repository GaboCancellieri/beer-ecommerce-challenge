import products from "../../data/products";

export function getProducts(req, res) {
  res.json(products);
}

export function getProductById(req, res) {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}
