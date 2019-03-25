import { ADD_NEW_MARKER,
  DRAW_MARKER,
  DEF_LOAD,
  SET_CENTER_MAP,
  REMOVE_MARKER,
  SORT_END} from '../constants/App'

export function addNewMarker(marker) {
  return {
    type: ADD_NEW_MARKER,
    marker: marker
  }
}

export function drawMarker(marker) {
  return {
    type: DRAW_MARKER,
    marker: marker
  }
}

export function defLoad(byIdMarkers,markersId) {
  return {
    type: DEF_LOAD,
    payload: {byIdMarkers,markersId}
  }
}

export function setCenterMap(coord) {
  return {
    type: SET_CENTER_MAP,
    centerMap: coord
  }
}

export function removeMarker(byIdMarkers,markersId) {
  return {
    type: REMOVE_MARKER,
    payload: {byIdMarkers,markersId}
  }
}
export function onSortEnd(markersId) {
  return {
    type: SORT_END,
    payload: {markersId}
  }
}
