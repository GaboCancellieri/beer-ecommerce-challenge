'use client';

import { useRouter } from 'next/navigation';
import { Button, Typography } from '@/components/common';
import styles from './HomeLanding.module.scss';

/**
 * HomeLanding component.
 *
 * This component represents the landing section of the home page. It includes a logo, a welcome message,
 * and a button to navigate to the products page.
 *
 * @returns {JSX.Element} The rendered home landing component.
 */
export default function HomeLanding() {
  const router = useRouter();

  const handleClickProductsButton = () => {
    router.push('/products');
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/logo.png" alt="logo" />
      <header className={styles.header}>
        <Typography variant="h1">Welcome to Beer-Oz</Typography>
        <Typography variant="h6">
          Your one-stop shop for the best beers around.
        </Typography>
      </header>
      <nav className={styles.buttonContainer}>
        <Button
          variant="primary"
          outline
          rounded
          onClick={handleClickProductsButton}
        >
          <Typography variant="span">Explore Our Products</Typography>
        </Button>
      </nav>
    </div>
  );
}
