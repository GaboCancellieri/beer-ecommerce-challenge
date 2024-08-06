import axiosInstance from '../axiosConfig';

/**
 * Fetches the list of all products.
 *
 * @returns {Promise<Array>} - The list of products.
 */
export const getAllProducts = async () => {
  const response = await axiosInstance.get('/api/products');
  return response.data;
};

/**
 * Fetches the details of a product by its ID.
 *
 * @param {string} productId - The ID of the product.
 * @returns {Promise<Object>} - The product details.
 */
export const getProductById = async (productId) => {
  const response = await axiosInstance.get(`/api/products/${productId}`);
  return response.data;
};
