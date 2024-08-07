'use client';

import { Button, Icon } from '@/components/common';
import styles from '../TopNavigation.module.scss';
import { useRouter } from 'next/navigation';

/**
 * ProductDetailNav component.
 *
 * This component represents the navigation bar specifically for the product detail page.
 * It includes a back button, a title, and a more options menu.
 *
 * @returns {JSX.Element} The rendered product detail navigation component.
 */
export default function ProductDetailNav() {
  const router = useRouter();

  const handleOpenMoreOptions = () => {
    alert('More options');
  };

  return (
    <nav className={styles.navbar}>
      <Button size="small" variant="light" onClick={() => router.back()}>
        <Icon iconId="arrow-left" />
      </Button>
      <span className={styles.detailTitle}>Detail</span>
      <div className={styles.threeDotMenu}>
        <Button size="small" variant="light" onClick={handleOpenMoreOptions}>
          <Icon iconId="three-dots" />
        </Button>
      </div>
    </nav>
  );
}
