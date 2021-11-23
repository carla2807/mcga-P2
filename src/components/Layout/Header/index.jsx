import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Student-Massat</h2>
      </div>
    </div>
  );
};

export default Header;
