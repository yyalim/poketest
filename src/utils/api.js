import axios from 'axios';
import { arrayToObject } from './functions';

const BASE_URL = 'https://pokeapi.co/api/v2';

export function normalizePokemonList(response) {
  /* example output:
    {
      pikachu: { name: pikachu, url: ... },
      charizard: { name: charizard, url; ... }
    }
  */
  return arrayToObject(response.data.results, 'name');
}

export function normalizePokemonDetail(response) {
  const data = response.data;
  /* example output:
    {
      pikachu: {
        name: pikachu,
        id: ...,
        type: ...,
        ...
      }
    }
  */
  return {
    [data.name]: {
      name: data.name,
      id: data.id,
      types: data.types.map((type) => type.type.name),
      height: data.height,
      abilities: data.abilities.map((ability) => ability.ability.name),
    },
  };
}

export function getPokemonList({ offset = 0, limit = 151 } = {}) {
  return axios.get(`${BASE_URL}/pokemon`, { params: { offset, limit } }).then(normalizePokemonList);
}

export function getPokemonDetail(name) {
  return axios.get(`${BASE_URL}/pokemon/${name}`).then(normalizePokemonDetail);
}
