'use client';

import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import styles from './ProductCard.module.scss';
import {
  ImageWithFallback,
  Typography,
  Button,
  Icon
} from '@/components/common';
import { toKebabCase } from '@/utils/format';
import { getProductImageIconPath } from '@/utils/products.utils';
import { PRODUCT_RATING } from '@/constants/products.constants';

/**
 * ProductCard component.
 *
 * This component represents a card displaying brief information about a product,
 * including its brand, image, rating, and price. It also includes a button to view more details about the product.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product object containing details of the product.
 * @param {number} props.index - The index of the product in the list, used to determine if the card is even or odd.
 * @returns {JSX.Element} The rendered product card component.
 */
export default function ProductCard({ product, index }) {
  const router = useRouter();
  const isEven = index % 2 === 0;
  const imageSrc = getProductImageIconPath(product.brand);

  const handleMoreDetailsClick = () => {
    router.push(`/products/${product.id}-${toKebabCase(product.brand)}`);
  };

  return (
    <div
      className={classNames(
        styles.productCardContainer,
        isEven ? styles.even : styles.odd
      )}
    >
      <Typography className={styles.productBrand} variant="span">
        {product.brand}
      </Typography>
      <ImageWithFallback
        className={styles.productImage}
        src={imageSrc}
        alt={product.brand}
        width={122}
        height={122}
      />
      <div className={styles.productInformation}>
        {PRODUCT_RATING[product.id] ? (
          <div className={styles.productRating}>
            <Icon iconId="golden-star" alt="star icon" width={12} height={12} />
            <Typography className={styles.rating} variant="span">
              {PRODUCT_RATING[product.id].rating}
            </Typography>
          </div>
        ) : null}
        <Typography className={styles.productPrice} variant="span">
          ${product.price}
        </Typography>
        <Button
          className={styles.moreDetailsButton}
          variant="primary"
          size="small"
          onClick={handleMoreDetailsClick}
        >
          <Icon iconId="plus" alt="plus icon" />
        </Button>
      </div>
    </div>
  );
}
