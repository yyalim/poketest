import React from 'react';
import { shallow } from 'enzyme';

import PokemonLink from './PokemonLink';

function setup() {
  const props = { name: 'pikachu' };
  const wrapper = shallow(<PokemonLink name={props.name} />);
  return { wrapper, props };
}

describe('PokemonDetailPage test suite', () => {
  it('Should get name of the pokemon from url param', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.pokemon-link--text').text()).toMatch(/pikachu/);
  });
});
