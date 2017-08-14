import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function classListReducer(state = initialState.classList, action) {
  switch(action.type) {
    case types.UPLOAD_CLASS_LIST_FULFILLED:
      return action.payload.response;
    default: 
      return state;  
  }
}