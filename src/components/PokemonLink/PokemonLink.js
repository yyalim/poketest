import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './PokemonLink.scss';

export default function PokemonLink({ name }) {
  const imgUrl = `https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`;

  return (
    <div className="pokemon-link-container">
      <Link className="pokemon-link" to={`/pokemon/${name}`}>
        <div className="pokemon-link--content">
          <div className="pokemon-link--image-container">
            <img className="pokemon-link--image" src={imgUrl} alt={`A wild ${name}`} />
          </div>
          <p className="pokemon-link--text">{name}</p>
        </div>
      </Link>
    </div>
  );
}

PokemonLink.propTypes = {
  name: PropTypes.string,
};
