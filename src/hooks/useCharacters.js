/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { getCharacters, getCharacterById } from '../../services/rickAndMortyApi';

export const useCharacters = page => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters));
  }, [page]);

  return {
    loading,
    characters
  };
};
