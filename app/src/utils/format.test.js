import { parseError, toKebabCase } from './format';

// Tests for parseError
describe('parseError', () => {
  it('should return the error message from the response data', () => {
    const error = {
      response: {
        data: {
          message: 'Server error occurred',
        },
      },
    };
    expect(parseError(error)).toBe('Server error occurred');
  });

  it('should return a network error message if no response is received', () => {
    const error = {
      request: {},
    };
    expect(parseError(error)).toBe('No response received from the server. Please check your network connection.');
  });

  it('should return the error message if provided', () => {
    const error = {
      message: 'An unexpected error occurred',
    };
    expect(parseError(error)).toBe('An unexpected error occurred');
  });

  it('should return a default error message if no specific error information is available', () => {
    const error = {};
    expect(parseError(error)).toBe('An unknown error occurred');
  });
});

// Tests for toKebabCase
describe('toKebabCase', () => {
  it('should convert a string to kebab-case', () => {
    expect(toKebabCase('Modelo Especial')).toBe('modelo-especial');
  });

  it('should handle strings with multiple spaces', () => {
    expect(toKebabCase('  Modelo  Especial  ')).toBe('modelo-especial');
  });

  it('should handle strings with special characters', () => {
    expect(toKebabCase('Modelo Especial!@#$')).toBe('modelo-especial');
  });

  it('should return the original string if it is empty or null', () => {
    expect(toKebabCase('')).toBe('');
    expect(toKebabCase(null)).toBe(null);
    expect(toKebabCase(undefined)).toBe(undefined);
  });

  it('should handle strings with numbers', () => {
    expect(toKebabCase('Modelo 123 Especial')).toBe('modelo-123-especial');
  });
});