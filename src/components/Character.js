import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ photo, name, handleClick }) => {
  return (
    <div className={styles.Character}>
      <img src={photo} />
      <h1>{name}</h1>
      <button onClick={handleClick}>Generate Character</button>
    </div>
  );
};

Character.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default Character;
