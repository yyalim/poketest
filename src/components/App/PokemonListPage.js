import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonLink from '../PokemonLink';
import { handleGetPokemonListAction } from '../../store/pokemons';
import './PokemonListPage.scss';

export default function PokemonListPage() {
  const loading = useSelector((state) => state.loading);
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetPokemonListAction());
  }, []);

  return (
    <div className="pokemon-list-page">
      <div className="header" />
      <div className="pokemon-list">
        {loading && <p>loading...</p>}
        {Object.keys(pokemons).map((pokemonName) => (
          <PokemonLink key={pokemonName} name={pokemonName} />
        ))}
      </div>
    </div>
  );
}
