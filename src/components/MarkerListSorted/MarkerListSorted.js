import React, {Component} from 'react'
import Marker from '../Marker/Marker'
import PropTypes from 'prop-types';
import {SortableContainer} from 'react-sortable-hoc';

class MarkerListSorted extends Component {
  static propTypes = {
    byIdMarkers: PropTypes.object.isRequired,
    index: PropTypes.array.isRequired,
  };

  render(){
    const {byIdMarkers, index} = this.props;
    const items = index.map((id, index)=>{
      return <Marker
        key = {id}
        index = {index}
        marker = {byIdMarkers[id]}
        removeMarker={this.onRemoveMarker(id)}
      />;
    });
    return(
      <div style={{overflow:"auto"}}>
        {items}
      </div>
    )
  }

  onRemoveMarker = (id)=>()=>{
    const {byIdMarkers,index, removeMarker} = this.props;
    const newByIdMarkers = Object.assign({},byIdMarkers);
    const newMarkersId = index.slice();
    delete newByIdMarkers[id];
    newMarkersId.splice(newMarkersId.indexOf(id), 1);
    removeMarker(newByIdMarkers,newMarkersId)
  }
};

export default SortableContainer(MarkerListSorted)
