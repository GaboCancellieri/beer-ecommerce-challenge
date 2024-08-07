'use client';

import { useRouter } from 'next/navigation';
import { Button, ImageWithFallback, Typography } from '@/components/common';
import styles from './Footer.module.scss';

export default function Footer() {
  const router = useRouter();

  const handleGoToHome = () => {
    router.push('/');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.companyInfo}>
        <Button variant="transparent" onClick={handleGoToHome}>
          <ImageWithFallback
            src="/logo.png"
            alt="logo"
            width={135}
            height={100}
          />
        </Button>
        <div className={styles.title}>
          <Typography variant="h2">Beer-Oz</Typography>
          <Typography variant="h6">Brewed to Beat the Heat.</Typography>
        </div>
      </div>
      <div className={styles.rightsReservedText}>
        <p>&copy; 2024 Beer-Oz. All rights reserved.</p>
      </div>
    </footer>
  );
}
