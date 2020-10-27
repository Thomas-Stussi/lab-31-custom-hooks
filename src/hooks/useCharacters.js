/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { getCharacters, getCharacterById } from '../../services/rickAndMortyApi';

export const useCharacters = page => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false));
  }, [page]);

  return {
    loading,
    characters
  };
};

export const useCharacterById = id => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacterById] = useState(null);

  useEffect(() => {
    getCharacterById(id)
      .then(fetchedCharacter => setCharacterById(fetchedCharacter))
      .finally(() => setLoading(false));
  }, [id]);

  return {
    loading,
    character
  };
};
