import stockPrices from "../data/stock-price.js";

/**
 * Gets stock and price information by SKU code.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export function getStockPriceBySku(req, res) {
  const sku = req.params.sku;
  const stockPrice = stockPrices[sku];
  if (stockPrice) {
    res.json({ ...stockPrice, price: stockPrice.price / 100 });
  } else {
    res.status(404).json({ message: "Stock/Price not found" });
  }
}
