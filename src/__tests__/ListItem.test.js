import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../components/ListItem';

describe('ListItem component', () => {
  it('renders ListItem', () => {
    const item = {
      _id: '1234',
      name: 'Bart Simpson',
      photoUrl: 'eatmyshorts.jpg'
    };
    const wrapper = shallow(<ListItem
      {...item} />);
    expect(wrapper).toMatchSnapshot();
  });
});
