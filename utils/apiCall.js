import axios from 'axios';
import btoa from 'btoa';
import { MAIN_URL } from '../constants/index';

export function readCookie(name) {
  // use while development.
  const dummyUser = {
    "token": "ddce6479-c184-4562-8f3e-31fcf4530dfd",
    "username": "cs",
    "organization_id": "101",
    "session_id": "9e5e35bb-c058-470c-b757-5fffaaf2c167",
    "role_id": "6201106aaadbcc1442b4b15a"
  };
  return dummyUser[name];

  if (typeof document === 'undefined') return null;

  const key = name + '=';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(key) === 0) {
      return cookie.substring(key.length, cookie.length);
    }
  }
  return null;
}
/**
 * Makes an Edvora backend API call and handles errors. Accepts an *AxiosOption*
 * object to specify other parameters for the request. Automatically handles
 * authentication.
 */
export const apiCall = async (url, options, headers) => {
  const response = await axios({
    url: url,
    headers: {
      ...headers,
      authorization: btoa(
        JSON.stringify({
          token: readCookie('token'),
          username: readCookie('username'),
          organization_id: readCookie('organization_id'),
          session_id: readCookie('session_id'),
          role_id: readCookie('role_id'),
        })
      ),
    },
    ...options,
  })
    .then((resp) => {
      if (resp.status === 200) {
        return resp.data;
      } else {
        // handle other 2xx codes
        console.log(resp);
      }
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = err.response?.status;
      // for login error
      if (error?.status == 498) {
        window.location.href = MAIN_URL + "l";
      }
      if (err.message !== 'canceled') throw error;
    });

  return response;
};
