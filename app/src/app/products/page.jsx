import { TopNavigation, Footer } from '@/components/layout';
import { UserGreeting, ProductList } from '@/components/pages/product';
import { ErrorBoundary } from '@/components/common';
import { parseError } from '@/utils/format';
import styles from '../page.module.scss';
import { getAllProducts } from '@/services/products.service';

export const metadata = {
  title: 'Beer-Oz - Products',
  description: 'A simple ecommerce app for beer.'
};

/**
 * ProductListingPage component.
 *
 * This component fetches the list of products and handles any errors that occur during
 * the fetching process. It displays the products inside the ProductList component
 * and uses the ErrorBoundary component to catch and display any errors.
 *
 * @returns {JSX.Element} The rendered product listing page.
 */
export default async function ProductListingPage() {
  let products = null;
  let error = null;

  try {
    products = await getAllProducts();
  } catch (err) {
    error = parseError(err);
  }

  return (
    <div className={styles.pageContainer}>
      <TopNavigation />
      <ErrorBoundary error={error}>
        <UserGreeting />
        <ProductList products={products} />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
