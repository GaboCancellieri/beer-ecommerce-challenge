import { toKebabCase } from './format';

export function getProductImageIcon(productBrand) {
  return `/products/icons/${toKebabCase(productBrand)}.png`;
}
