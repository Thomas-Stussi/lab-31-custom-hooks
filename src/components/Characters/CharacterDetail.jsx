/* eslint-disable keyword-spacing */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterById } from '../../hooks/useCharacters';

const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, character } = useCharacterById(id);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <h3 data-testid="detail">{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
    </>
  );
};

export default CharacterDetail;
