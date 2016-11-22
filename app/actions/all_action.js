export const SELECT_APP_TYPE = 'SELECT_APP_TYPE';

export function selectAppType(appType) {
  return {
    type: SELECT_APP_TYPE,
    selectedType: appType
  };
}
