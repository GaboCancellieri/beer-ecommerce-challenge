'use client';

import PropTypes from 'prop-types';
import { Typography } from '@/components/common';
import styles from './DetailsCardHeader.module.scss';

/**
 * DetailsCardHeader component.
 *
 * This component represents the header of a product details card, displaying the product brand, origin,
 * stock information, and price of the selected variant.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product object containing details of the product.
 * @param {Object} props.selectedVariant - The currently selected SKU object.
 * @returns {JSX.Element} The rendered details card header component.
 */
function DetailsCardHeader({ product, selectedVariant }) {
  return (
    <div className={styles.cardHeader}>
      <div className={styles.cardTitle}>
        <Typography variant="h3">{product.brand}</Typography>
        <Typography className={styles.additionalInfo} variant="span">
          Origin: {product.origin} | Stock: {selectedVariant.stock}
        </Typography>
      </div>
      <div className={styles.price}>
        <Typography variant="h3">${selectedVariant.price}</Typography>
      </div>
    </div>
  );
}

DetailsCardHeader.propTypes = {
  product: PropTypes.object.isRequired,
  selectedVariant: PropTypes.object.isRequired
};

export default DetailsCardHeader;
