import { createStore, combineReducers } from 'redux';
import middleware from './middleware';
import { pokemonsReducer } from './pokemons';

const INITIAL_STATE = {
  pokemons: {},
};

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});

export default function initStore(initialState = INITIAL_STATE) {
  return createStore(rootReducer, initialState, middleware);
}
