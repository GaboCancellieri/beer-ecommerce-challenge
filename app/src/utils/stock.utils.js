import { getStockPriceBySku } from '@/services/stock.service';

/**
 * Updates the SKUs with their corresponding stock and price information.
 *
 * @param {Array} skus - The initial SKUs data.
 * @returns {Promise<Array>} - The updated SKUs data.
 * @throws {Error} - If there is an error fetching the SKUs data.
 */
export const updateSkus = async skus => {
  try {
    const skusPromises = skus.map(async sku => {
      const updatedStockPrice = await getStockPriceBySku(sku.code);
      return {
        ...sku,
        ...updatedStockPrice
      };
    });
    const updatedSkus = await Promise.all(skusPromises);
    return updatedSkus;
  } catch (error) {
    throw new Error(`Error updating SKUs: ${error.message}`);
  }
};
