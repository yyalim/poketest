import React from 'react';
import { shallow } from 'enzyme';

import PokemonDetail from './PokemonDetail';

describe('PokemonDetail test suite', () => {
  it('should return detail regards on props', () => {
    const props = {
      name: 'pikachu',
      id: 17,
      height: 10,
      types: ['electric'],
      abilities: ['static'],
    };
    const wrapper = shallow(<PokemonDetail {...props} />);

    expect(wrapper.find('.pokemon-detail--name').text()).toMatch(/pikachu/);
    expect(wrapper.find('.pokemon-detail--type').text()).toMatch(/electric/);
    expect(wrapper.find('.pokemon-detail--abilities')).toHaveLength(1);
  });
});
