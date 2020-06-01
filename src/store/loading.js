export const SET_LOADING = 'SET_LOADING';
export const UNSET_LOADING = 'UNSET_LOADING';

export function loadingReducer(state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return true;
    case UNSET_LOADING:
      return false;
    default:
      return state;
  }
}

export function setLoading() {
  return {
    type: SET_LOADING,
  };
}

export function unsetLoading() {
  return {
    type: UNSET_LOADING,
  };
}
