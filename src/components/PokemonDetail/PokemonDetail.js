import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './PokemonDetail.scss';

export default function PokemonDetail({ name, id, types = [], height, abilities = [] }) {
  const imgUrl = `https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`;

  return (
    <div className="pokemon-detail">
      <Link className="pokemon-detail--homepage-link" to="/pokemon" />
      <img className="pokemon-detail--image" src={imgUrl} alt={`A wild ${name}.`} />
      <p className="pokemon-detail--name">{name}</p>
      <p className="pokemon-detail--field pokemon-detail--id">
        <span className="pokemon-detail--label">ID:</span>
        {id}
      </p>
      <p className="pokemon-detail--field pokemon-detail--type">
        <span className="pokemon-detail--label">Type:</span>
        {types[0]}
      </p>
      <p className="pokemon-detail--field pokemon-detail--height">
        <span className="pokemon-detail--label">Height:</span>
        {height}
      </p>
      <p className="pokemon-detail--field">
        <span className="pokemon-detail--label">Abilities</span>
      </p>
      <ul className="pokemon-detail--abilities">
        {abilities.map((ability) => (
          <li key={ability} className="pokemon-detail--ability">
            {ability}
          </li>
        ))}
      </ul>
    </div>
  );
}

PokemonDetail.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number,
  abilities: PropTypes.arrayOf(PropTypes.string),
};
