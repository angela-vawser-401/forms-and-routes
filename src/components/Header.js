import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>The Last Airbender</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/detail">Detail</Link>
      </nav>
    </header >
  );
}
