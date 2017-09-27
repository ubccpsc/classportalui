import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function courseSettings(state = initialState.courseSettings, action) {
  switch(action.type) {
    case types.GET_COURSE_SETTINGS_FULFILLED:
      return action.payload.response;
    default: 
      return state;
  }
}