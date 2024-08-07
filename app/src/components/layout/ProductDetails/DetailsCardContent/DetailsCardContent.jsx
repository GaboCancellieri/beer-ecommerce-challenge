'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Button, Typography } from '@/components/common';
import styles from './DetailsCardContent.module.scss';

function DetailsCardContent({
  product,
  skus,
  selectedVariant,
  handleSizeChange
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (product) {
      if (!showFullDescription) {
        setShowFullDescription(product.information?.length <= 200);
      }
    }
  }, [product]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <div className={styles.cardDescription}>
        <Typography variant="h6">Description</Typography>
        <span className={styles.description}>
          {showFullDescription ? (
            <span>
              {product.information + ' '}
              <span className={styles.readMore} onClick={toggleDescription}>
                Read less
              </span>
            </span>
          ) : (
            <span>
              {product.information.substring(0, 200) + ' ... '}
              <span className={styles.readMore} onClick={toggleDescription}>
                Read more
              </span>
            </span>
          )}
        </span>
      </div>
      <div className={styles.productSizes}>
        <Typography variant="h6">Size</Typography>
        <div className={styles.sizeButtons}>
          {skus.map(sku => (
            <Button
              key={sku.code}
              className={classNames(styles.sizeButton, {
                [styles.selected]: sku.code === selectedVariant.code
              })}
              variant="gray"
              outline
              onClick={() => handleSizeChange(sku)}
            >
              <Typography className={styles.sizeButtonText} variant="span">
                {sku.name}
              </Typography>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

DetailsCardContent.propTypes = {
  product: PropTypes.object.isRequired,
  skus: PropTypes.array.isRequired,
  selectedVariant: PropTypes.object.isRequired,
  handleSizeChange: PropTypes.func.isRequired
};

export default DetailsCardContent;
