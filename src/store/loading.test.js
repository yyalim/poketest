import { loadingReducer, setLoading, unsetLoading, SET_LOADING, UNSET_LOADING } from './loading';

describe('loadingReducer', () => {
  it('should return true when action type is SET_LOADING', () => {
    expect(loadingReducer(undefined, { type: SET_LOADING })).toBe(true);
  });

  it('should return false when action type is UNSET_LOADING', () => {
    expect(loadingReducer(undefined, { type: UNSET_LOADING })).toBe(false);
  });

  it('should return current state when action type is unknown', () => {
    expect(loadingReducer(false, { type: 'SOMETHING_ELSE' })).toBe(false);
  });
});

describe('setLoading', () => {
  it('should SET_LOADING as action type', () => {
    expect(setLoading()).toEqual({ type: SET_LOADING });
  });
});

describe('unsetLoading', () => {
  it('should UNSET_LOADING as action type', () => {
    expect(unsetLoading()).toEqual({ type: UNSET_LOADING });
  });
});
