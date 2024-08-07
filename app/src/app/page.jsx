import styles from './page.module.scss';
import { TopNavigation, Footer } from '@/components/layout';
import { HomeLanding } from '@/components/pages/home';

export const metadata = {
  title: 'Beer-Oz',
  description: 'A simple ecommerce app for beer.'
};

/**
 * Home component.
 *
 * This component represents the home page of the application. It includes a top navigation bar,
 * a landing section, and a footer.
 *
 * @returns {JSX.Element} The rendered home page.
 */
export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <TopNavigation />
      <HomeLanding />
      <Footer />
    </div>
  );
}
