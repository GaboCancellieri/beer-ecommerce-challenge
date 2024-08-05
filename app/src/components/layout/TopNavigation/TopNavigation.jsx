"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./TopNavigation.module.css";

export default function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navButtons}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </div>
        <div className={`${styles.navMenu} ${isOpen ? styles.show : ""}`}>
          <Link href="/products">
            <a className={styles.navLink}>Products</a>
          </Link>
          <Link href="/about">
            <a className={styles.navLink}>About</a>
          </Link>
          <Link href="/contact">
            <a className={styles.navLink}>Contact</a>
          </Link>
        </div>
      </div>
      <div className={styles.account}>
        <img
          src="/account-picture.jpg"
          alt="Account"
          className={styles.accountImage}
        />
      </div>
    </nav>
  );
}
