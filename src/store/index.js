import { createStore, combineReducers } from 'redux';
import middleware from './middleware';
import { pokemonsReducer } from './pokemons';
import { loadingReducer } from './loading';

const INITIAL_STATE = {
  pokemons: {},
  loading: false,
};

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  loading: loadingReducer,
});

export default function initStore(initialState = INITIAL_STATE) {
  return createStore(rootReducer, initialState, middleware);
}
