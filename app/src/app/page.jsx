import styles from './page.module.scss';
import { TopNavigation, Footer, HomeLanding } from '@/components/layout';

export const metadata = {
  title: 'Beer-Oz',
  description: 'A simple ecommerce app for beer.'
};

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <TopNavigation />
      <HomeLanding />
      <Footer />
    </div>
  );
};

export default Home;
