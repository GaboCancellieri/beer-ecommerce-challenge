import stockPrices from "../../data/stock-price";

export function getStockPriceBySku(req, res) {
  const sku = req.params.sku;
  const stockPrice = stockPrices[sku];
  if (stockPrice) {
    res.json(stockPrice);
  } else {
    res.status(404).json({ message: "Stock/Price not found" });
  }
}
