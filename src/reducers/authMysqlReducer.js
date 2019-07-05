import { AUTH } from '../actions/types';

const INITIAL_STATE = {
  auth: null,
  authData: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH:
      return { ...state, auth: true, authData: action.payload };

    default:
      return state;
  }
};
