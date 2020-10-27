import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterItem = character => (
  <>
    <Link to={`/detail/${character.id}`} >
      <figure>
        <img src={character.image} alt={character.name} />
        <figcaption>{character.name}</figcaption>
      </figure>
    </Link>
  </>
);

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterItem;
