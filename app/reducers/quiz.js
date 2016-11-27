import { SELECT_APP_TYPE, SELECT_PRODUCT_RANGE,
         SELECT_PAGE_RANGE, SELECT_REVENUE_RANGE,
         SELECT_FEATURES, SELECT_ANALYTICS, SELECT_TRACKING} from '../actions/all_action';

export default function quiz(
  state = {
    selectedType: null,
    selectedProductRange: null,
    selectedPageRange: null,
    selectedRevenueRange: null,
    apiIntegration: false,
    calendering: false,
    blogging: false,
    advertising: false,
    design: false,
    other: false,
    userTracking: null,
    analytics: false}, action) {
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
  case SELECT_ANALYTICS: {
    let analytics;
    if (action.analytics === 'yes') {
      analytics = true;
    } else {
      analytics = false;
    }
    return {
      ...state,
      analytics: analytics
    };
  }
  case SELECT_TRACKING: {
    let tracking;
    if (action.bool === 'yes') {
      tracking = true;
    } else {
      tracking = false;
    }
    return {
      ...state,
      userTracking: tracking
    };
  }
  case SELECT_FEATURES:
    return {
      ...state,
      apiIntegration: action.apiIntegration,
      calendering: action.calendering,
      blogging: action.blogging,
      advertising: action.advertising,
      design: action.design,
      other: action.other,
    };
  default:
    return state;
  }
}
