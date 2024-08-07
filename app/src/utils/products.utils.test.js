import { getProductImageIconPath } from './products.utils';

// Tests for getProductImageIconPath
describe('getProductImageIconPath', () => {
  it('should return the correct file path for a given product brand', () => {
    expect(getProductImageIconPath('Modelo Especial')).toBe('/products/icons/modelo-especial.png');
    expect(getProductImageIconPath('Cerveza Corona')).toBe('/products/icons/cerveza-corona.png');
  });

  it('should handle brands with multiple spaces', () => {
    expect(getProductImageIconPath('  Modelo  Especial  ')).toBe('/products/icons/modelo-especial.png');
  });

  it('should handle brands with special characters', () => {
    expect(getProductImageIconPath('Modelo Especial!@#$')).toBe('/products/icons/modelo-especial.png');
  });

  it('should handle brands with numbers', () => {
    expect(getProductImageIconPath('Modelo 123 Especial')).toBe('/products/icons/modelo-123-especial.png');
  });

  it('should return a file path with an empty string for empty or null brand names', () => {
    expect(getProductImageIconPath('')).toBe('/products/icons/.png');
    expect(getProductImageIconPath(null)).toBe('/products/icons/.png');
    expect(getProductImageIconPath(undefined)).toBe('/products/icons/.png');
  });
});