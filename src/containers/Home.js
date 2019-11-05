import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCharacter } from '../../services/avatarApi';
import Character from '../components/Character';
import Form from '../components/Form';

export default class Home extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    data: {},
    name: '',
    search: ''
  };

  newCharacter() {
    return getCharacter('/api/v1/characters/random')
      .then(data => this.setState({ data: data[0] }));
  }

  componentDidMount() {
    this.newCharacter();
  }

  handleClick = () => {
    this.newCharacter();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/list/${this.state.name}`);
  }

  handleChange = ({ target }) => {
    this.setState({ name: target.value });
  }

  render() {
    const { data, name } = this.state;

    return (
      <>
        <Character character={data} />
        <button onClick={this.handleClick}>RANDOM CHARACTER</button>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={name}
        />
      </>

    );
  }
}
