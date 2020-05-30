import React from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonListPage() {
  const { name } = useParams();

  return <p className="page--pokemon-detail-page">{name} Detail Page</p>;
}
