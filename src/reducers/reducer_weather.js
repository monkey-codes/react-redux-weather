import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){

  switch(action.type){
    //concat will not mutate the array but produce a new array 
    //case FETCH_WEATHER: return state.concat([action.payload.data]);
    //or spread(...) all the entries in state, into the new array
    case FETCH_WEATHER: return [action.payload.data, ...state];
  }
  return state;
}
