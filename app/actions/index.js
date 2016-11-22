import { bindActionCreators } from 'redux';
import * as AllActions from './all_action';

export function bindActions (dispatch) {
  return {
    quiz: bindActionCreators(AllActions, dispatch)
  };
}
