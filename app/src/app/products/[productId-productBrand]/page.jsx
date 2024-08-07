import { ProductDetails } from '@/components/pages/product';
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

/**
 * ProductDetailsPage component.
 *
 * This component fetches the details of a specific product along with its SKUs and handles
 * any errors that occur during the fetching process. It displays the product details inside
 * the ProductDetails component and uses the ErrorBoundary component to catch and display any errors.
 *
 * @param {Object} params - The parameters object containing the product ID and brand.
 * @returns {JSX.Element} The rendered product details page.
 */
export default async function ProductDetailsPage({ params }) {
  const productId = params['productId-productBrand'].split('-')[0];
  let productWithSkus = null;
  let error = null;
  try {
    productWithSkus = await getProductWithSkus(productId);
  } catch (err) {
    error = err.message;
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
