import Link from 'next/link';
import styles from './page.module.scss';
import { Typography, Button } from '@/components/common';
import { TopNavigation, Footer } from '@/components/layout';

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <TopNavigation />
      <div className={styles.container}>
        <img className={styles.logo} src="/logo.png" alt="logo" />
        <header className={styles.header}>
          <Typography variant="h1">Welcome to Beer-Oz</Typography>
          <Typography variant="subtitle">
            Your one-stop shop for the best beers around.
          </Typography>
        </header>
        <nav className={styles.buttonContainer}>
          <Link href="/products">
            <Button variant="primary" outline rounded>
              <Typography variant="span">Explore Our Products</Typography>
            </Button>
          </Link>
        </nav>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
