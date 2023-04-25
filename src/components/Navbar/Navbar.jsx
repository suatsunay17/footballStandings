import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navbarBrand}>Football Leagues</a>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}><a href="/premier-league" className={styles.navLink}>Premier League</a></li>
        <li className={styles.navItem}><a href="/la-liga" className={styles.navLink}>La Liga</a></li>
        <li className={styles.navItem}><a href="/bundesliga" className={styles.navLink}>Bundesliga</a></li>
        <li className={styles.navItem}><a href="/serie-a" className={styles.navLink}>Serie A</a></li>
        <li className={styles.navItem}><a href="/ligue-1" className={styles.navLink}>Ligue 1</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
