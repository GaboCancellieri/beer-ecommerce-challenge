import { ImageWithFallback } from '@/components/common';
import { getProductImageIcon } from '@/utils/products';
import styles from './ProductDetails.module.scss';

export default function ProductDetails({ product }) {
  const imageSrc = getProductImageIcon(product.brand);
  return (
    <div>
      <ImageWithFallback
        className={styles.productImage}
        src={imageSrc}
        alt={product.brand}
        width={240}
        height={240}
      />
      <h1>{product.brand}</h1>
      <p>{product.information}</p>
      {product.skus.map(sku => (
        <div key={sku.code}>
          <p>{sku.name}</p>
          <p>Stock: {sku.stock}</p>
          <p>Price: ${sku.price}</p>
        </div>
      ))}
    </div>
  );
}
