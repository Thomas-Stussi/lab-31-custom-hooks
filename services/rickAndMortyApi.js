/* eslint-disable max-len */
const fetch = require('node-fetch');

export const getCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(json => json.results);
};

export const getCharacterById = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json());
};
