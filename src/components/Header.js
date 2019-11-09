import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/detail">Detail</Link>
      </nav>
    </header >
  );
}
