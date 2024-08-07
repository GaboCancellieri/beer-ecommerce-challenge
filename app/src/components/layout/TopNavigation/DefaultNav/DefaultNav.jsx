'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button, Icon, ImageWithFallback } from '@/components/common';
import styles from '../TopNavigation.module.scss';

export default function DefaultNav() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleOpenHamburgerMenu = () => {
    alert('Hamburger menu oppened');
  };

  const handleOpenUserMenu = () => {
    alert('User menu oppened');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navButtons}>
        <div className={styles.hamburger}>
          <Button
            size="small"
            variant="light"
            onClick={handleOpenHamburgerMenu}
          >
            <Icon iconId="hamburger-menu" />
          </Button>
        </div>
      </div>
      {!isHomePage ? (
        <div className={styles.account}>
          <Button
            size="small"
            variant="trasparent"
            onClick={handleOpenUserMenu}
          >
            <ImageWithFallback
              src="/user/user-profile.jpg"
              alt="Account"
              className={styles.accountImage}
              width={40}
              height={40}
            />
          </Button>
        </div>
      ) : null}
    </nav>
  );
}
