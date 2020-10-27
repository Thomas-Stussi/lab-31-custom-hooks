/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import CharacterItem from './CharacterItem';

describe('Item Component', () => {
  it('renders Item component', () => {
    const testCharacter = {
      'id': 13,
      'name': 'Alien Googah',
      'status': 'unknown',
      'species': 'Alien',
      'type': '',
      'gender': 'unknown',
      'origin': {
        'name': 'unknown',
        'url': ''
      },
      'location': {
        'name': 'Earth (Replacement Dimension)',
        'url': 'https://rickandmortyapi.com/api/location/20'
      },
      'image': 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
      'episode': [
        'https://rickandmortyapi.com/api/episode/31'
      ],
      'url': 'https://rickandmortyapi.com/api/character/13',
      'created': '2017-11-04T20:33:30.779Z'
    };
    
    const { asFragment } = render(<CharacterItem character={testCharacter} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
