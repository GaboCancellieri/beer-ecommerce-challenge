'use client';

import { useEffect, useState } from 'react';
import { Button, Icon, ImageWithFallback } from '@/components/common';
import { getProductImageIconPath } from '@/utils/products.utils';
import styles from './ProductDetails.module.scss';
import useStockPriceUpdater from '@/hooks/useStockPriceUpdater';
import DetailsCardHeader from './DetailsCardHeader';
import DetailsCardContent from './DetailsCardContent';
import DetailsCardFooter from './DetailsCardFooter';
import { parseError } from '@/utils/format';

/**
 * ProductDetails component.
 *
 * This component displays detailed information about a product, including its image, variants, and additional details.
 * It uses a custom hook to update the stock and price information for the product's SKUs periodically.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product object containing details of the product.
 * @param {Array} props.initialSkus - The initial array of SKU objects representing different size variants.
 * @returns {JSX.Element} The rendered product details component.
 */
export default function ProductDetails({ product, initialSkus }) {
  const [skus, error] = useStockPriceUpdater(initialSkus);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const imageSrc = product ? getProductImageIconPath(product.brand) : '';

  useEffect(() => {
    if (error) {
      window.alert(
        `Error fetching stock and price information: ${parseError(error)}`
      );
    }
  }, [error]);

  useEffect(() => {
    if (skus) {
      if (selectedVariant) {
        const updatedVariant = skus.find(
          sku => sku.code === selectedVariant.code
        );
        if (updatedVariant) {
          setSelectedVariant(updatedVariant);
        }
      } else {
        setSelectedVariant(skus[0]);
      }
    }
  }, [product, skus]);

  const handleSizeChange = sku => {
    setSelectedVariant(sku);
  };

  return product && selectedVariant ? (
    <div className={styles.detailsContainer}>
      <ImageWithFallback
        className={styles.productImage}
        src={imageSrc}
        alt={product.brand}
        width={240}
        height={240}
      />
      <div className={styles.informationCard}>
        <DetailsCardHeader
          product={product}
          selectedVariant={selectedVariant}
        />
        <DetailsCardContent
          product={product}
          skus={skus}
          selectedVariant={selectedVariant}
          handleSizeChange={handleSizeChange}
        />
        <DetailsCardFooter
          product={product}
          selectedVariant={selectedVariant}
        />
      </div>
    </div>
  ) : null;
}
