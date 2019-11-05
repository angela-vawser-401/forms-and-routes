import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => {
  return (
    <div>
      <img src={character.photoUrl} />
      <h2>{character.name}</h2>
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
