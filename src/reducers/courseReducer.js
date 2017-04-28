import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      // state.push(action.course);
      return [
        ...state,
        Object.assign({}, action.course)
      ];//spread operator
    default:
      return state;
  }
}
