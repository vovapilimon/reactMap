import React, {Component} from 'react'
import {SortableElement} from 'react-sortable-hoc';
import PropTypes from 'prop-types';
import styles from './style.module.css'

class Marker extends Component {
  static propTypes = {
    marker: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      coord: PropTypes.array.isRequired,
    }).isRequired,
    removeMarker: PropTypes.func.isRequired
  };

  render(){
    const {marker, removeMarker} = this.props;    
    return(
      <div className={styles.markerBlock}>
        <span>
          {marker.text}
        </span>
        <button
          type="submit"
          className={styles.deleteButton}
          onClick={removeMarker}
        >x</button>
      </div>
    )
  }
};

export default SortableElement(Marker)
