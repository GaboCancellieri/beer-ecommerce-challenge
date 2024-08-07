import ProductDetails from '@/components/layout/ProductDetails';
import { TopNavigation, Footer } from '@/components/layout';
import { ErrorBoundary } from '@/components/common';
import { getProductWithSkus } from '@/services/stock.service';
import styles from '../../page.module.scss';

export async function generateMetadata({ params }) {
  const productBrand = params['productId-productBrand']
    .substring(params['productId-productBrand'].indexOf('-') + 1)
    .replace(/-/g, ' ')
    .toUpperCase();
  return {
    title: `Beer-Oz - ${productBrand}`,
    description: 'A simple ecommerce app for beer.'
  };
}

export default async function ProductDetailsPage({ params }) {
  const productId = params['productId-productBrand'].split('-')[0];
  let productWithSkus = null;
  let error = null;
  try {
    productWithSkus = await getProductWithSkus(productId);
  } catch (err) {
    error = err;
  }

  return (
    <div className={styles.pageContainer}>
      <TopNavigation />
      <ErrorBoundary error={error}>
        {productWithSkus ? (
          <ProductDetails
            product={productWithSkus}
            initialSkus={productWithSkus.skus}
          />
        ) : null}
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
