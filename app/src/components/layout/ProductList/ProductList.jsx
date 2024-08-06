'use client';

import ProductCard from './ProductCard';
import styles from './ProductList.module.scss';

export default function ProductList({ products }) {
  return (
    <div className={styles.productListContainer}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
