import React, {Component} from 'react'
 import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';

export default class YandexMap extends Component{
  render(){
    const {markersId, byIdMarkers, centerMap} = this.props;
    const coords = markersId.map(id => byIdMarkers[id].coord);
    return (
      <YMaps
        query = {{ load: "package.full" }}
      >
        <Map
          defaultState = {{center : centerMap, zoom : 10}}
          width = "100%"
          height = "100vh"
          onBoundsChange = {this.onBoundsChange}
        >
        {markersId.map((id)=>{
          return (
            <Placemark
              key = {id}
              geometry = {byIdMarkers[id].coord}
              options = {{draggable:true, id:id}}
              properties = {{balloonContentHeader: `${byIdMarkers[id].text}`}}
              onDrag = {this.dragMarker}
            />
          )
        })}

        <Polyline
          geometry = {coords}
          options = {{
            balloonCloseButton: false,
            strokeColor: '#000',
            strokeWidth: 4,
            strokeOpacity: 0.5,
          }}
        />
        </Map>
      </YMaps>
    )
  }

  onBoundsChange = (event)=>{
    const map = event.get('target');
    const {setCenterMap} = this.props;
    setCenterMap(map.getCenter({useMapMargin : true}));
  }

  //Перемещение маркера
  dragMarker=(event)=>{
    const marker = event.get('target');
    var newCoords = marker.geometry.getCoordinates();
    const id = marker.options.get('id');
    const {byIdMarkers, odDrawMarker} = this.props;
    const newMarker = {
      id : id,
      text : byIdMarkers[id].text,
      coord : newCoords
    }
    odDrawMarker(newMarker);
  }
}
