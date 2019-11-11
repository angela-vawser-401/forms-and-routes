import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ListItem.css';


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
        <section className={styles.ListItem}>
          <li key={this.props._id}>
            <img src={this.props.photo} alt={this.props._id} />
            <h2>{this.props.name}</h2>
          </li>
        </section>
      </Link>
    );
  }
}

export default ListItem;
