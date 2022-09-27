import axios from 'axios';
import btoa from 'btoa';

export function readCookie(name) {
  // use while development.
  // const dummyUser = {
  //   "token": "2fe77aec-19ca-4b89-a234-1c4a18013947",
  //   "username": "cf",
  //   "organization_id": "101",
  //   "session_id": "5966c7ac-c5e6-441a-9d50-b66c99801ec6",
  //   "role_id": "62011052aadbcc1442b4b159"
  // };
  const dummyUser = {
    "token": "ddce6479-c184-4562-8f3e-31fcf4530dfd",
    "username": "cs",
    "organization_id": "101",
    "session_id": "9e5e35bb-c058-470c-b757-5fffaaf2c167",
    "role_id": "6201106aaadbcc1442b4b15a"
  };
  // const dummyUser = {
  //   token: '4e867d66-817c-4cc5-a8d5-43d29ecd40ff',
  //   username: 'ritiksharma_student',
  //   organization_id: '111',
  //   session_id: '65f0fe19-0076-4b87-b53b-e5ccbae494c7',
  //   role_id: '6201106aaadbcc1442b4b15a',
  // };
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

export const loginApiCall = async (url, options, headers) => {
  const response = await axios({
    url,
    ...headers,
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
      error.status = err?.response?.status;
      error.response = err?.response;
      // for login error
      if (error?.status == 498) {
        window.location.href = 'https://main.edvora.me';
      }
    });

  return response;
};

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
        // window.location.href = 'https://main.edvora.me/l';
        window.location.href = '/l';
      }
      if (err.message !== 'canceled') throw error;
    });

  return response;
};
