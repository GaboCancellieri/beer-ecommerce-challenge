'use client';

import Link from 'next/link';
import styles from './ProductCard.module.scss';

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCardContainer}>
      <span className={styles.productBrand}>{product.brand}</span>
      <img
        className={styles.productImage}
        src={product.image}
        alt={product.brand}
      />
      <p>
        {product.style} - {product.substyle}
      </p>
      <Link
        href={`/product/${product.id}-${product.brand
          .toLowerCase()
          .replace(/ /g, '-')}`}
      >
        View Details
      </Link>
    </div>
  );
}
