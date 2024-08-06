'use client';

import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import styles from './ProductList.module.scss';
import { Typography } from '@/components/common';

function ProductList({ products }) {
  return (
    <div className={styles.container}>
      <Typography className={styles.productListTitle} variant="h4">
        Our Products
      </Typography>
      <div className={styles.listContainer}>
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}

ProductList.PropTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
