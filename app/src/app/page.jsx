import Link from 'next/link';
import styles from './page.module.scss';
import { TopNavigation, Footer } from '@/components/layout';

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <TopNavigation />
      <div className={styles.container}>
        <img className={styles.logo} src="/logo.png" alt="logo" />
        <header className={styles.header}>
          <h1>Welcome to Beer-Oz</h1>
          <p>Your one-stop shop for the best beers around.</p>
        </header>
        <nav className={styles.nav}>
          <Link href="/products">Explore Our Products</Link>
        </nav>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
