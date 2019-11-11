import React from 'react';
import { shallow } from 'enzyme';
import Search from '../components/Search';

describe('Search component', () => {
  it('renders Search', () => {
    const wrapper = shallow(<Search
      search="hello"
      handleChange={() => { }}
      handleSubmit={() => { }}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
