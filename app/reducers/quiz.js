import { SELECT_APP_TYPE, SELECT_PRODUCT_RANGE,
         SELECT_PAGE_RANGE, SELECT_REVENUE_RANGE,
         SELECT_FEATURES, SELECT_CMS, SELECT_TRACKING,
         CLEAR_RESULTS} from '../actions/all_action';

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
    tracking: null,
    cms: null}, action) {
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
  case SELECT_CMS: {
    let cms;
    if (action.cms === 'yes') {
      cms = true;
    } else {
      cms = false;
    }
    return {
      ...state,
      cms: cms
    };
  }
  case SELECT_TRACKING: {
    let tracking;
    if (action.tracking === 'yes') {
      tracking = true;
    } else {
      tracking = false;
    }
    return {
      ...state,
      tracking: tracking
    };
  }
  case SELECT_FEATURES: {
    let checked = action.isSelected;
    switch (action.selectedItem) {
    case 'apiIntegration':
      return {
        ...state,
        apiIntegration: action.isSelected
      };
    case 'calendering':
      return {
        ...state,
        calendering: checked
      };
    case 'advertising':
      return {
        ...state,
        advertising: checked
      };
    case 'design':
      return {
        ...state,
        design: checked
      };
    case 'blogging':
      return {
        ...state,
        blogging: checked
      };
    case 'other':
      return {
        ...state,
        other: checked
      };
    default:
      return state;
    }
  }
  case CLEAR_RESULTS:
    return {
      ...state,
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
      tracking: null,
      cms: null
    };
  default:
    return state;
  }
}
