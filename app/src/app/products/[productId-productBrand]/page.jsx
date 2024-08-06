import ProductDetails from '@/components/layout/ProductDetails';
import { parseError } from '@/utils/format';
import { ErrorBoundary, TopNavigation, Footer } from '@/components/layout';
import { getProductById } from '@/services/products/productsService';
import { getStockPriceBySku } from '@/services/stock/stockService';
import styles from '../../page.module.scss';

export default async function ProductDetailsPage({ params }) {
  let error = null;
  let productWithSkus = null;
  try {
    const [productId, productBrand] =
      params['productId-productBrand'].split('-');
    const product = await getProductById(productId);
    const skusPromises = product.skus.map(async sku => {
      const data = await getStockPriceBySku(sku.code);
      return {
        ...sku,
        ...data
      };
    });

    const mappedSkus = await Promise.all(skusPromises);
    productWithSkus = {
      ...product,
      skus: mappedSkus
    };
  } catch (error) {
    error = parseError(error);
  }

  return (
    <div className={styles.pageContainer}>
      <TopNavigation />
      <ErrorBoundary error={error}>
        <ProductDetails product={productWithSkus} />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
