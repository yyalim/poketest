import { arrayToObject } from './functions';

describe('arrayToObject', () => {
  it('should return an object from array of objects based on key parameter', () => {
    const pokemons = [
      { name: 'pikachu', id: 17 },
      { name: 'charizard', id: 19 },
    ];

    expect(arrayToObject(pokemons, 'name')).toEqual({
      pikachu: { name: 'pikachu', id: 17 },
      charizard: { name: 'charizard', id: 19 },
    });
  });
});
