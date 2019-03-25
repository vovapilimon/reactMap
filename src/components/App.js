import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/AppAction'
import YandexMap from './YandexMap'
import MarkerListSorted from './MarkerListSorted/MarkerListSorted'
import PropTypes from 'prop-types';
import arrayMove from 'array-move';

class App extends Component{
  state = {
    newMarkerText: "",
    uniqueIdMarker: 0,
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    byIdMarkers: PropTypes.object.isRequired,
    centerMap: PropTypes.array.isRequired,
    markersId: PropTypes.array.isRequired,
  };

  render(){
    const {
      markersId,
      byIdMarkers,
      isNewMarker,
      idNewMarker,
      centerMap
    } = this.props;
        console.log(this.props);
    const {setCenterMap, removeMarker} = this.props.actions;
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-3">
            <input
              type = "text"
              className = "form-control"
              onChange = {this.handleChange}
              onKeyPress = {this.onClick}
              value = {this.state.newMarkerText}
              placeholder = "Новая точка маршрута"
            />
            <MarkerListSorted
              index = {markersId}
              byIdMarkers = {byIdMarkers}
              removeMarker = {removeMarker}
              onSortEnd = {this.onSortEnd}
            />

          </div>
          <div className = "col-9">
            <YandexMap
              markersId = {markersId}
              byIdMarkers = {byIdMarkers}
              isNewMarker = {isNewMarker}
              idNewMarker = {idNewMarker}
              odDrawMarker = {this.props.actions.drawMarker}
              centerMap = {centerMap}
              setCenterMap = {setCenterMap}
            />
          </div>
        </div>
      </div>
    )
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    const {onSortEnd} = this.props.actions;
    const {markersId} = this.props;
    onSortEnd(arrayMove(markersId, oldIndex, newIndex));
  };

  componentWillMount(){
    const centerMap = [55.72, 37.44];
    const coords = [
      [55.8, 37.5],
      [55.8, 37.4],
      [55.7, 37.5],
      [55.7, 37.4]
    ];
    const byIdMarkers = {};
    const markersId = [];
    let {uniqueIdMarker} = this.state;
    coords.forEach((coord, i) => {
      const marker = {
        id: uniqueIdMarker,
        text: `Marker - ${i}`,
        coord: coord
      };
      uniqueIdMarker++;
      byIdMarkers[i] = marker;
      markersId.push(i);
    });
    const {defLoad, setCenterMap} = this.props.actions;
    setCenterMap(centerMap);
    defLoad(byIdMarkers,markersId);
    this.setState({uniqueIdMarker});
  }

  handleChange = (event) => {
    this.setState({newMarkerText: event.target.value});
  }

  onClick = (event)=>{
    if(event.charCode === 13)
    {
      const {addNewMarker} = this.props.actions;
      const {centerMap} = this.props;

      const marker = {
        id: this.state.uniqueIdMarker,
        text: this.state.newMarkerText,
        coord: centerMap
      };
      addNewMarker(marker);
      this.setState({uniqueIdMarker: this.state.uniqueIdMarker + 1});
    }
  }
}

function mapStateToProps (state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
