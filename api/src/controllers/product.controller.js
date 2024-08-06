import products from "../data/products.js";
import stockPrices from "../data/stock-price.js";

/**
 * Get all products and populate the first SKU price into each product.
 */
export function getProducts(req, res) {
  const productsWithPrices = products.map(product => {
    const firstSkuCode = product.skus[0]?.code;
    const firstSkuPrice = stockPrices[firstSkuCode]?.price;

    return {
      ...product,
      price: (firstSkuPrice / 100) || null,
    };
  });
  res.json(productsWithPrices);
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
