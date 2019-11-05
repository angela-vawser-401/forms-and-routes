import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class ListItem extends Component {

  static propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    history: PropTypes.object
  }


  render() {
    const characterUrl = `/character/${this.props._id}`;
    return (
      <Link to={characterUrl}>

        <li key={this.props._id}>
          <img src={this.props.photo} alt={this.props._id}></img>
          <p>{this.props.name}</p>
        </li>
      </Link>
    );
  }
}

export default ListItem;
