import { getStockPriceBySku } from '@/services/stock.service';
import { updateSkus } from './stock.utils';

// Mock the getStockPriceBySku function
jest.mock('@/services/stock.service');

describe('updateSkus', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update SKUs with stock and price information', async () => {
    const initialSkus = [
      { code: '10167', name: '12 - 24oz Cans' },
      { code: '10166', name: '18 - 12oz Cans' },
    ];

    const updatedStockPrice1 = { stock: 130, price: 2865 };
    const updatedStockPrice2 = { stock: 456, price: 2640 };

    getStockPriceBySku.mockResolvedValueOnce(updatedStockPrice1);
    getStockPriceBySku.mockResolvedValueOnce(updatedStockPrice2);

    const result = await updateSkus(initialSkus);

    expect(result).toEqual([
      { code: '10167', name: '12 - 24oz Cans', stock: 130, price: 2865 },
      { code: '10166', name: '18 - 12oz Cans', stock: 456, price: 2640 },
    ]);

    expect(getStockPriceBySku).toHaveBeenCalledTimes(2);
    expect(getStockPriceBySku).toHaveBeenCalledWith('10167');
    expect(getStockPriceBySku).toHaveBeenCalledWith('10166');
  });

  it('should throw an error if fetching stock price fails', async () => {
    const initialSkus = [
      { code: '10167', name: '12 - 24oz Cans' },
    ];

    getStockPriceBySku.mockRejectedValueOnce(new Error('Network error'));

    await expect(updateSkus(initialSkus)).rejects.toThrow('Error updating SKUs: Network error');

    expect(getStockPriceBySku).toHaveBeenCalledTimes(1);
    expect(getStockPriceBySku).toHaveBeenCalledWith('10167');
  });
});
