import {
  pokemonsReducer,
  getPokemonListAction,
  GET_POKEMON_LIST,
  getPokemonDetailAction,
  GET_POKEMON_DETAIL,
  handleGetPokemonListAction,
  handleGetPokemonDetailAction,
} from './pokemons';

describe('pokemonsReducer', () => {
  it('should update pokemons list when action is GET_POKEMON_LIST', () => {
    const pokemons = {
      pikachu: { name: 'pikachu', url: 'www.example.com' },
      charizard: { name: 'charizard', url: 'www.example.com' },
    };
    const state = {};
    const action = {
      type: GET_POKEMON_LIST,
      pokemons,
    };

    expect(pokemonsReducer(state, action)).toEqual(pokemons);
  });

  it('should update pokemon detail when action is GET_POKEMON_DETAIL', () => {
    const state = {
      pikachu: { name: 'pikachu', url: 'www.example.com' },
      charizard: { name: 'charizard', url: 'www.example.com' },
    };
    const action = {
      type: GET_POKEMON_DETAIL,
      pokemon: { pikachu: { id: 17 } },
    };

    const result = {
      ...state,
      ...action.pokemon,
    };

    expect(pokemonsReducer(state, action)).toEqual(result);
  });

  it('should return original state if action type not mathed', () => {
    const state = {
      pikachu: { name: 'pikachu', url: 'www.example.com' },
      charizard: { name: 'charizard', url: 'www.example.com' },
    };

    const action = {
      type: 'NON_EXISTED_TYPE',
      pokemon: { ash: { age: 10 } },
    };

    expect(pokemonsReducer(state, action)).toEqual(state);
  });
});

describe('getPokemonListAction', () => {
  it('should return pokemon list & action type', () => {
    const pokemons = {
      pikachu: { name: 'pikachu', url: 'www.example.com' },
      charizard: { name: 'charizard', url: 'www.example.com' },
    };
    expect(getPokemonListAction(pokemons)).toEqual({ type: GET_POKEMON_LIST, pokemons });
  });
});

describe('getPokemonDetailAction', () => {
  it('should return pokemon detail & action type', () => {
    const pokemon = {
      pikachu: {
        name: 'pikachu',
        id: 12,
      },
    };

    expect(getPokemonDetailAction(pokemon)).toEqual({
      type: GET_POKEMON_DETAIL,
      pokemon,
    });
  });
});

describe('handlegetPokemonListAction', () => {
  it('should return a function', () => {
    expect(typeof handleGetPokemonListAction()).toBe('function');
  });
});

describe('handlegetPokemonDetailAction', () => {
  it('should return a function', () => {
    expect(typeof handleGetPokemonDetailAction()).toBe('function');
  });
});
