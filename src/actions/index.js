import qs from 'qs';

import lic from '../apis/lic';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  REGISTRATION,
  AUTH
  // FETCH_SERVICES,
  // FETCH_SHOP,
  // FETCH_AUCTION,
  // FETCH_PORTFOLIO,
  // FETCH_CV
} from './types';

// Google Auth
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const registration = formValue => async dispatch => {
  const data = {
    key: 'yRQ2eGNJA45KfRO2',
    type: 'registration',
    username: formValue.username, // fix this
  };
  const url = '';
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url
  };
  const response = await lic(options);
  dispatch({ type: REGISTRATION, payload: response.data });
  // Programmatic navigation to
  // get the user back to the root route
  history.push('/');
};

export const auth = formValue => async dispatch => {
  const data = {
    key: 'yRQ2eGNJA45KfRO2',
    type: 'auth',
    username: formValue.username,
    pass: formValue.pass
  };
  const url = '';
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url
  };
  const response = await lic(options);
  dispatch({ type: AUTH, payload: response.data });
  // Programmatic navigation to
  // get the user back to the root route
  history.push('/');
};

// export const fetchServices = () => {
//   return {
//     type: FETCH_SERVICES
//   };
// };

// export const fetchShop = () => {
//   return {
//     type: FETCH_SHOP
//   };
// };

// export const fetchAuction = () => {
//   return {
//     type: FETCH_AUCTION
//   };
// };

// export const fetchPortfolio = () => {
//   return {
//     type: FETCH_PORTFOLIO
//   };
// };

// export const fetchCv = () => {
//   return {
//     type: FETCH_CV
//   };
// };
