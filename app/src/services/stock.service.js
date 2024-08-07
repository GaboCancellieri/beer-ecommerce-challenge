import axiosInstance from './axiosConfig';

import { getProductById } from './products.service';
import { parseError } from '@/utils/format';

/**
 * Fetches the stock and price information for a product SKU.
 *
 * @param {string} skuCode - The SKU code of the product.
 * @returns {Promise<Object>} - The stock and price information.
 */
export const getStockPriceBySku = async skuCode => {
  const response = await axiosInstance.get(`/api/stock-price/${skuCode}`);
  return response.data;
};

/**
 * Fetches a product by its ID and maps its SKUs with corresponding stock and price information.
 *
 * @param {string} productId - The ID of the product.
 * @returns {Promise<Object>} - The product with its SKUs mapped to stock and price information.
 * @throws {Error} - If there is an error fetching the product or SKUs data.
 */
export const getProductWithSkus = async productId => {
  try {
    const product = await getProductById(productId);
    const skusPromises = product.skus.map(async sku => {
      const data = await getStockPriceBySku(sku.code);
      return {
        ...sku,
        ...data
      };
    });

    const mappedSkus = await Promise.all(skusPromises);
    const productWithSkus = {
      ...product,
      skus: mappedSkus
    };

    return productWithSkus;
  } catch (error) {
    throw new Error(parseError(error));
  }
};
