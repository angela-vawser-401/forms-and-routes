import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    const { name, handleSubmit, handleChange } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Character Name" value={name} onChange={handleChange} />
        <button>SEARCH</button>
      </form>
    );
  }
}
