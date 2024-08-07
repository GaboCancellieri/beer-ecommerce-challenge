import {
  ProductList,
  TopNavigation,
  Footer,
  UserGreeting
} from '@/components/layout';
import { ErrorBoundary } from '@/components/common';
import { parseError } from '@/utils/format';
import styles from '../page.module.scss';
import { getAllProducts } from '@/services/products.service';

export const metadata = {
  title: 'Beer-Oz - Products',
  description: 'A simple ecommerce app for beer.'
};

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
