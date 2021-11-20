import React from 'react';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarMenu}>
        <li>Home</li>
        <li>Students</li>
      </ul>
    </div>
  );
};

export default NavBar;
