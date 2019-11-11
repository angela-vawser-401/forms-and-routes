import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

const Search = ({ search, handleSubmit, handleChange }) => {

  return (
    <form className={styles.Search} onSubmit={handleSubmit}>
      <h2>Search Characters</h2>
      <input type="text" name="search" value={search} onChange={handleChange}></input>
      <button>Search</button>
    </form>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Search;
