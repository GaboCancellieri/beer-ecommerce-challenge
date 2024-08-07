import { useEffect, useState } from 'react';
import { updateSkus } from '@/utils/stock.utils';

/**
 * Custom hook to periodically update stock and price information for SKUs.
 *
 * @param {Array} initialSkus - The initial SKUs data.
 * @param {number} interval - The interval time in milliseconds for updating stock and price information.
 * @returns {Array} - The updated SKUs data and any error that occurred.
 */
const useStockPriceUpdater = (initialSkus, interval = 5000) => {
  const [skus, setSkus] = useState(initialSkus);
  const [error, setError] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const updatedSkus = await updateSkus(initialSkus);
        setSkus(updatedSkus);
      } catch (err) {
        setError(err.message);
        window.alert(
          `Error fetching stock and price information: ${err.message}`
        );
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [initialSkus, interval]);

  return [skus, error];
};

export default useStockPriceUpdater;
