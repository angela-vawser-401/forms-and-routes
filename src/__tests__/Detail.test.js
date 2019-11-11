import React from 'react';
import { shallow } from 'enzyme';
import CharacterDetail from '../components/Detail';

jest.mock('../../services/avatarApi', () => ({
  getSingleCharacter() {
    return Promise.resolve([
      {
        '_id': '5da237699734fdcb7bef8f51',
        'name': 'Arnold Shortman',
        'photoUrl': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333',
        'gender': 'male'
      }
    ]);
  }
}));

describe('Character Detail component', () => {

  it('renders', () => {
    const wrapper = shallow(
      <CharacterDetail
        match={{
          params: {
            name: 'arnold'
          }
        }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
