import React from 'react';
import { shallow } from 'enzyme';
import Character from '../components/Character';

describe('Character component', () => {
  it('renders a character', () => {
    const handleClick = () => {
      // eslint-disable-next-line no-console
      console.log('peekaboo');
    };
    const wrapper = shallow(
      <Character 
        name="Title"
        photo="Image"
        handleClick={handleClick} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  
});
