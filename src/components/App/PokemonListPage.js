import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonLink from '../PokemonLink';
import { handleGetPokemonListAction } from '../../store/pokemons';
import './PokemonListPage.scss';

export default function PokemonListPage() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      await dispatch(handleGetPokemonListAction());
    }

    fetchData();
  }, []);

  return (
    <div className="pokemon-list-page">
      <div className="header" />
      <div className="pokemon-list">
        {Object.keys(pokemons).map((pokemonName) => (
          <PokemonLink key={pokemonName} name={pokemonName} />
        ))}
      </div>
    </div>
  );
}
