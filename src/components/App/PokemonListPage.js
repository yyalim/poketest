import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonLink from '../PokemonLink';
import LoadingIndicator from '../LoadingIndicator';
import { handleGetPokemonListAction } from '../../store/pokemons';
import './PokemonListPage.scss';

export default function PokemonListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const loading = useSelector((state) => state.loading);
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetPokemonListAction());
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterByName = (value) => {
    return value.includes(searchTerm);
  };

  return (
    <div className="pokemon-list-page">
      <div className="pokemon-list-page--header" />

      <div className="pokemon-list-page--search-container">
        <input
          className="pokemon-list-page--search"
          type="search"
          placeholder="search by name"
          onChange={handleSearchChange}
        />
      </div>

      {loading && <LoadingIndicator />}
      <div className="pokemon-list-page--pokemon-list">
        {Object.keys(pokemons)
          .filter(filterByName)
          .map((pokemonName) => (
            <PokemonLink key={pokemonName} name={pokemonName} />
          ))}
      </div>
    </div>
  );
}
