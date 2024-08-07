'use client';

import { TopNavigation, Footer } from '@/components/layout';
import { Typography } from '@/components/common';
import styles from './not-found.module.scss';

export default function NotFoundPage() {
  return (
    <div className={styles.pageContainer}>
      <TopNavigation />
      <div className={styles.errorCard}>
        <Typography variant="h2">404 Not Found</Typography>
        <img
          src="/oops404.png"
          alt="Thinking emoji"
          width={300}
          height={250}
          className={styles.shruggingImage}
        />
        <Typography variant="h6">
          We couldn't find the page you were looking for.
        </Typography>
      </div>
      <Footer />
    </div>
  );
}
