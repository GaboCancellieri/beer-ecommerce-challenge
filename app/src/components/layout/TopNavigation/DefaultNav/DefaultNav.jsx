'use client';

import { usePathname, useRouter } from 'next/navigation';
import classNames from 'classnames';
import { Button, Icon, ImageWithFallback } from '@/components/common';
import styles from '../TopNavigation.module.scss';

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Products',
    href: '/products'
  }
];

/**
 * DefaultNav component.
 *
 * This component represents the default navigation bar of the application. It includes navigation buttons,
 * a hamburger menu, and a user menu.
 *
 * @returns {JSX.Element} The rendered default navigation component.
 */
export default function DefaultNav() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleNavigation = href => {
    router.push(href);
  };

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
        <div className={styles.navMenu}>
          {NAV_ITEMS.map(item => (
            <Button
              key={item.label}
              variant="transparent"
              onClick={() => handleNavigation(item.href)}
              className={classNames({
                [styles.active]: pathname === item.href
              })}
            >
              {item.label}
            </Button>
          ))}
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
