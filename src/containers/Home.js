import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Character from '../components/Character';
import Search from '../components/Search';
import { getCharacter } from '../../services/avatarApi';
import styles from './Home.css';

class Home extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    photo: '',
    name: '',
    search: '',
  };

  componentDidMount() {
    getCharacter()
      .then(character => {
        this.setState({ photo: character[0].photoUrl, name: character[0].name });
      });
  }

  handleClick = event => {
    event.preventDefault();
    getCharacter()
      .then(character => {
        this.setState({ photo: character[0].photoUrl, name: character[0].name });
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    const searchUrl = `/list/${this.state.search}`;
    this.props.history.push(searchUrl);
  }

  handleChange = ({ target }) => {
    this.setState({ name: target.value });
  }

  render() {

    return (
      <div className={styles.Home}>
        <Character photo={this.state.photo} name={this.state.name} handleClick={this.handleClick} />
        <Search search={this.state.search} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default Home;
