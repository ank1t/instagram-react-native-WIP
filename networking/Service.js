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

export const performGETNetworkReq = async (endPoint, setResultHook, setErrorHook) => {
  console.log("****** Make GET call ******");
  try {
    const response = await fetch(endPoint)
    if (response.ok) {
      const result = await response.json()
      setResultHook(result)
      return
    }
    setResultHook([])  
  } catch (error) {
    setErrorHook(error)
  }
}

export const performPOSTNetworkReq = async (endpoint, payload, setResultHook, setErrorHook) => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      const result = await response.json()
      setResultHook(result)
      return
    }
  } catch (error) {
    setErrorHook(error)
  }
}

function getHeaders() {
  /*
    Additional headers can be added
  */
  return {
    'Content-Type': "application/json"
  }
}