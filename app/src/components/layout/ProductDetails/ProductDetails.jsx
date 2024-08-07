'use client';

import { useEffect, useState } from 'react';
import { Button, Icon, ImageWithFallback } from '@/components/common';
import { getProductImageIcon } from '@/utils/products.utils';
import styles from './ProductDetails.module.scss';
import useStockPriceUpdater from '@/hooks/useStockPriceUpdater';
import DetailsCardHeader from './DetailsCardHeader';
import DetailsCardContent from './DetailsCardContent';
import DetailsCardFooter from './DetailsCardFooter';

export default function ProductDetails({ product, initialSkus }) {
  const [skus, error] = useStockPriceUpdater(initialSkus);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const imageSrc = product ? getProductImageIcon(product.brand) : '';

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
