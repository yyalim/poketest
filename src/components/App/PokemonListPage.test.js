import React from 'react';
import { shallow } from 'enzyme';

import PokemonListPage from './PokemonListPage';

function setup() {
  const props = {};
  const wrapper = shallow(<PokemonListPage />);
  return { wrapper, props };
}

describe('PokemonListPage test suite', () => {
  it('Should have an p tag', () => {
    const { wrapper } = setup();

    expect(wrapper.find('p').exists()).toBe(true);
  });
});
