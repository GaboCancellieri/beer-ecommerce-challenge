'use client';
import { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './TopNavigation.module.scss';
import { Button, Icon, ImageWithFallback } from '@/components/common';

const MENU_ITEMS = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Products',
    link: '/products'
  }
];

export default function TopNavigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isDetailPage = pathname.includes('/product/');

  if (isDetailPage) {
    return (
      <nav className={styles.navbar}>
        <button className={styles.backButton} onClick={() => router.back()}>
          ←
        </button>
        <span className={styles.detailTitle}>Detail</span>
        <div className={styles.threeDotMenu}>
          <button onClick={toggleMenu}>⋮</button>
          {isMenuOpen && (
            <div className={styles.dropdownMenu}>
              <button>Option 1</button>
              <button>Option 2</button>
              <button>Option 3</button>
            </div>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navButtons}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <Button size="small" variant="light">
            {isMenuOpen ? (
              <Icon iconId="close" />
            ) : (
              <Icon iconId="hamburger-menu" />
            )}
          </Button>
        </div>
        <div
          className={classNames(styles.navMenu, { [styles.show]: isMenuOpen })}
        >
          {MENU_ITEMS.map(item => (
            <Link className={styles.navLink} key={item.title} href={item.link}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.account}>
        <ImageWithFallback
          src="/user/user-profile.jpg"
          alt="Account"
          className={styles.accountImage}
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
}
