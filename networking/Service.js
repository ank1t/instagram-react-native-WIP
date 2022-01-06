import {
  HOST_URL,
  STORIES_PATH,
  LOGIN_PATH,
  SIGNUP_PATH,
  POSTS_PATH,
} from "./Constants";

export const API_END_POINTS = Object.freeze({
  STORIES_ENDPOINT: HOST_URL + STORIES_PATH,
  LOGIN_ENDPOINT: HOST_URL + LOGIN_PATH,
  SIGNUP_ENDPOINT: HOST_URL + SIGNUP_PATH,
  POSTS_ENDPOINT: HOST_URL + POSTS_PATH,
});

export function performGETNetworkReq(
  endPoint,
  setResultHook,
  setErrorHook) {
  console.log("****** Make GET call ******");
  fetch(endPoint)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
    })
    .then(
      (result) => {
        setResultHook(result);
      },
      (error) => {
        setErrorHook(error);
      }
    );
}

export function performPOSTNetworkReq(
  endpoint,
  payload,
  setResultHook,
  setErrorHook) {
  console.log("****** Make POST call ******");
  fetch(endpoint, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(payload)
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
    })
    .then(
      (result) => {
        setResultHook(result);
      },
      (error) => {
        setErrorHook(error)
      }
    );
}

function getHeaders() {
  /*
    Additional headers can be added
  */
  return {
    'Content-Type': "application/json"
  }
}