import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navbar}>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/students">
          <li>Students</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
