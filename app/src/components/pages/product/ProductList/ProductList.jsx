'use client';

import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import styles from './ProductList.module.scss';
import { Typography } from '@/components/common';

/**
 * ProductList component.
 *
 * This component displays a list of products. Each product is rendered as a ProductCard.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.products - The array of product objects to be displayed.
 * @returns {JSX.Element} The rendered product list component.
 */
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
