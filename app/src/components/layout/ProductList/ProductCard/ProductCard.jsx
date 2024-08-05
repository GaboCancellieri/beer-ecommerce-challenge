'use client';

import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.brand} />
      <h2>{product.brand}</h2>
      <p>
        {product.style} - {product.substyle}
      </p>
      <Link
        href={`/product/${product.id}-${product.brand
          .toLowerCase()
          .replace(/ /g, '-')}`}
      >
        <a>View Details</a>
      </Link>
    </div>
  );
}
