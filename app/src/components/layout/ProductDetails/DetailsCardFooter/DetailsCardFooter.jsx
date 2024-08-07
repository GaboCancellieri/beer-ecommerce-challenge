'use client';

import PropTypes from 'prop-types';
import { Button, Icon } from '@/components/common';
import styles from './DetailsCardFooter.module.scss';

function DetailsCardFooter({ product, selectedVariant }) {
  const handleAddToBag = () => {
    alert(`${selectedVariant.name} of ${product.brand} added to bag!`);
  };

  const handleAddToCart = () => {
    alert(`${selectedVariant.name} of ${product.brand} added to cart!`);
  };

  return (
    <div className={styles.cardFooter}>
      <Button
        className={styles.addToBagButton}
        variant="primary"
        size="large"
        onClick={handleAddToBag}
        outline
      >
        <Icon iconId="bag" />
      </Button>
      <Button variant="primary" size="large" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
}

DetailsCardFooter.propTypes = {
  product: PropTypes.object.isRequired,
  selectedVariant: PropTypes.object.isRequired
};

export default DetailsCardFooter;
