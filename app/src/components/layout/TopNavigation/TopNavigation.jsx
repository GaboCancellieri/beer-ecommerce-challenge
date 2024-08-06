'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './TopNavigation.module.scss';
import classNames from 'classnames';

const MENU_ITEMS = [
  {
    title: 'Products',
    link: '/products'
  }
];

export default function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className={styles.navButtons}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </div>
        <div className={classNames(styles.navMenu, { [styles.show]: isOpen })}>
          {MENU_ITEMS.map(item => (
            <Link key={item.title} href={item.link}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.account}>
        <img
          src="/user/user-profile.webp"
          alt="Account"
          className={styles.accountImage}
        />
      </div>
    </nav>
  );
}
