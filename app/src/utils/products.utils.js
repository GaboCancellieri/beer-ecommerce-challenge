import { toKebabCase } from './format';

/**
 * getProductImageIconPath function.
 *
 * This function returns the file path for a product's image icon based on the product brand.
 *
 * @param {string} productBrand - The brand of the product.
 * @returns {string} The file path to the product's image icon.
 */
export function getProductImageIconPath(productBrand) {
  return `/products/icons/${productBrand ? toKebabCase(productBrand) : ''}.png`;
}
