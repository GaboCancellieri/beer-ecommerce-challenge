import axiosInstance from '../axiosConfig';

/**
 * Fetches the stock and price information for a product SKU.
 *
 * @param {string} skuCode - The SKU code of the product.
 * @returns {Promise<Object>} - The stock and price information.
 */
export const getStockPriceBySku = async (skuCode) => {
  const response = await axiosInstance.get(`/api/stock-price/${skuCode}`);
  return response.data;
};
