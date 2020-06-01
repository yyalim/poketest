import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { handleGetPokemonDetailAction } from '../../store/pokemons';
import PokemonDetail from '../PokemonDetail';

export default function PokemonListPage() {
  const { name } = useParams();
  const loading = useSelector((state) => state.loading);
  const details = useSelector((state) => state.pokemons[name]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetPokemonDetailAction(name));
  }, []);

  return loading ? <p>Loading...</p> : <PokemonDetail {...details} />;
}
