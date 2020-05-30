import React from 'react';
import { shallow } from 'enzyme';

import PokemonDetailPage from './PokemonDetailPage';

jest.mock('react-router-dom', () => ({
  useParams: () => ({ name: 'pikachu' }),
}));

function setup() {
  const props = {};
  const wrapper = shallow(<PokemonDetailPage />);
  return { wrapper, props };
}

describe('PokemonDetailPage test suite', () => {
  it('Should get name of the pokemon from url param', () => {
    const { wrapper } = setup();

    expect(wrapper.find('p').text()).toMatch(/pikachu/);
  });
});
