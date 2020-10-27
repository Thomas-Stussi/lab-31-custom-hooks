/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../hooks/useCharacters';

const CharacterList = ({ page }) => {
  const { loading, characters } = useCharacters(page);
  if(loading) return <h1>Loading...</h1>;

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
  page: PropTypes.number
};

export default CharacterList;
