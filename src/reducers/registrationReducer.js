import { REGISTRATION } from '../actions/types';

const INITIAL_STATE = {
  isRegister: null,
  userRegistrationData: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTRATION:
      return { ...state, isRegister: true, userRegistrationData: action.payload };

    default:
      return state;
  }
};
