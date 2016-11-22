import { SELECT_APP_TYPE } from '../actions/all_action';

export default function quiz(state = { selectedType: null }, action) {
  switch (action.type) {
  case SELECT_APP_TYPE:
    return {
      ...state,
      selectedType: action.selectedType
    };
  default:
    return state;
  }
}
