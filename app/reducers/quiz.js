import { SELECT_APP_TYPE, SELECT_PRODUCT_RANGE,
         SELECT_PAGE_RANGE, SELECT_REVENUE_RANGE,
         SELECT_FEATURES, SELECT_STORAGE} from '../actions/all_action';

export default function quiz(
  state = {
    selectedType: null,
    selectedProductRange: null,
    selectedPageRange: null,
    selectedRevenueRange: null}, action) {
  switch (action.type) {
  case SELECT_APP_TYPE:
    return {
      ...state,
      selectedType: action.selectedType
    };
  case SELECT_PRODUCT_RANGE:
    return {
      ...state,
      selectedProductRange: action.selectedRange
    };
  case SELECT_PAGE_RANGE:
    return {
      ...state,
      selectedPageRange: action.selectedRange
    };
  case SELECT_REVENUE_RANGE:
    return {
      ...state,
      selectedRevenueRange: action.selectedRange
    };
  case SELECT_STORAGE:
    return {
      ...state,
      storage: action.storage
    };
  case SELECT_FEATURES:
    return {
      ...state,
      apiIntegration: action.apiIntegration,
      calendering: action.calendering,
      blogging: action.blogging,
      interactivity: action.interactivity
    };
  default:
    return state;
  }
}
