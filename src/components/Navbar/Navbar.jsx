import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import  {Dropdown}  from './Dropdown';

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarBrand}>Football Leagues</Link>
    <Dropdown/>
      {/* <ul className={styles.navbarNav}>
        <li className={styles.navItem}><Link to="/premier-league" className={styles.navLink}>Premier League</Link></li>
        <li className={styles.navItem}><Link to="/la-liga" className={styles.navLink}>La Liga</Link></li>
        <li className={styles.navItem}><Link to="/bundesliga" className={styles.navLink}>Bundesliga</Link></li>
        <li className={styles.navItem}><Link to="/serie-a" className={styles.navLink}>Serie A</Link></li>
        <li className={styles.navItem}><Link to="/ligue-1" className={styles.navLink}>Ligue 1</Link></li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
