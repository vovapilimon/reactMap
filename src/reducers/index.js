import { ADD_NEW_MARKER,
  DRAW_MARKER,
  DEF_LOAD,
  SET_CENTER_MAP,
  REMOVE_MARKER,
  SORT_END} from '../constants/App'

const initialState = {
  byIdMarkers: {},
  markersId: [],
  centerMap: [],
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case SORT_END:{
      return {...state, ...action.payload}
    }
    case DEF_LOAD:{
      return {...state, ...action.payload}
    }
    case SET_CENTER_MAP:{
      return {...state, ...action}
    }
    case REMOVE_MARKER:{
      return {...state, ...action.payload}
    }
    case ADD_NEW_MARKER:{
      const {marker} = action;
      return {
        ...state,
        markersId: [...state.markersId, marker.id],
        byIdMarkers:{
          ...state.byIdMarkers,
          [marker.id] : marker,
        },
        isNewMarker:true,
        idNewMarker:marker.id
      };
    }
    case DRAW_MARKER:{
      const {marker} = action;
      const {markersId} = state;
      if(!markersId.includes(marker.id)){
        markersId.push(marker.id)
      }
      return {
        ...state,
        byIdMarkers:{
          ...state.byIdMarkers,
          [marker.id] : marker,
        },
        markersId:  markersId
      };
    }
    default:
      return state;
 }
}
