/* eslint-disable max-len */
import React from 'react';
import PropTypes, { object } from 'prop-types';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(object).isRequired
};

export default CharacterList;
