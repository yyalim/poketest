import { getPokemonList, getPokemonDetail } from '../utils/api';
import { setLoading, unsetLoading } from './loading';

export const GET_POKEMON_LIST = 'GET_POKEMON_LIST';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';

export function pokemonsReducer(state = {}, action) {
  switch (action.type) {
    case GET_POKEMON_LIST:
      return {
        ...state,
        ...action.pokemons,
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        ...action.pokemon,
      };
    default:
      return state;
  }
}

export function getPokemonListAction(pokemons) {
  return {
    type: GET_POKEMON_LIST,
    pokemons,
  };
}

export function handleGetPokemonListAction() {
  return (dispatch) => {
    dispatch(setLoading());
    return getPokemonList()
      .then((pokemons) => dispatch(getPokemonListAction(pokemons)))
      .then(() => dispatch(unsetLoading()));
  };
}

export function getPokemonDetailAction(pokemon) {
  return {
    type: GET_POKEMON_DETAIL,
    pokemon,
  };
}

export function handleGetPokemonDetailAction(name) {
  return (dispatch) => {
    dispatch(setLoading());
    return getPokemonDetail(name)
      .then((pokemon) => dispatch(getPokemonDetailAction(pokemon)))
      .then(() => dispatch(unsetLoading()));
  };
}
