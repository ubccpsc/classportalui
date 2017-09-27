import * as types from '../actions/types.helper';
import initialState from './initial.state';
import { browserHistory } from 'react-router';

export default function deliverablesReducer(state = initialState.deliverables, action) {
  switch(action.type) {
    case types.GET_DELIVERABLES_FROM_COURSE_FULFILLED:
      return action.payload.response;
    default: 
      return state;
  }
}