export const SELECT_APP_TYPE = 'SELECT_APP_TYPE';
export const SELECT_PRODUCT_RANGE = 'SELECT_PRODUCTS_RANGE';
export const SELECT_PAGE_RANGE = 'SELECT_PAGE_RANGE';
export const SELECT_REVENUE_RANGE = 'SELECT_REVENUE_RANGE';
export const SELECT_FEATURES = 'SELECT_FEATURES';
export const SELECT_STORAGE  = 'SELECT_STORAGE';

export function selectAppType(appType) {
  return {
    type: SELECT_APP_TYPE,
    selectedType: appType
  };
}

export function selectProductRange(productsRange) {
  return {
    type: SELECT_PRODUCT_RANGE,
    selectedRange: productsRange
  };
}

export function selectPageRange(pageRange) {
  return {
    type: SELECT_PAGE_RANGE,
    selectedRange: pageRange
  };
}

export function selectRevenueRange(revenueRange) {
  return {
    type: SELECT_REVENUE_RANGE,
    selectedRange: revenueRange
  };
}

export function selectStorage(storage) {
  return {
    type: SELECT_REVENUE_RANGE,
    storage
  };
}

export function selectFeatures(apiIntegration, calendering, blogging, interactivity) {
  return {
    type: SELECT_FEATURES,
    apiIntegration,
    calendering,
    blogging,
    interactivity
  };
}
