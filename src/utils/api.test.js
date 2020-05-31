import { normalizePokemonList, normalizePokemonDetail } from './api';

describe('normalizePokemonList', () => {
  it('should normalize response', () => {
    const response = {
      data: {
        results: [
          { name: 'pikachu', url: 'www.example.com' },
          { name: 'jigglypuff', url: 'www.example.com' },
        ],
      },
    };
    expect(normalizePokemonList(response)).toEqual({
      pikachu: { name: 'pikachu', url: 'www.example.com' },
      jigglypuff: { name: 'jigglypuff', url: 'www.example.com' },
    });
  });
});

describe('normalizePokemonDetail', () => {
  it('should normalize response', () => {
    const response = {
      data: {
        name: 'pikachu',
        id: 17,
        height: 10,
        types: [{ type: { name: 'electric' } }],
        abilities: [{ ability: { name: 'static' } }],
      },
    };

    expect(normalizePokemonDetail(response).pikachu).toEqual(
      expect.objectContaining({
        name: 'pikachu',
      }),
    );
  });
});
