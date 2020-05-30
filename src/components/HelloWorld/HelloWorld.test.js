import React from 'react';
import { shallow } from 'enzyme';

import HelloWorld from './HelloWorld';

function setup() {
  const props = {};
  const wrapper = shallow(<HelloWorld />);
  return { wrapper, props };
}

describe('HelloWorld test suite', () => {
  it('Should have an p tag', () => {
    const { wrapper } = setup();

    expect(wrapper.find('p').exists()).toBe(true);
  });
});
