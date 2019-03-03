const tokenName = "Authorization";
const loginPath = "/login";

/**
 * @return {(string|null)} the auth token if found, null otherwise
 */
const getLocalToken = function setLocalToken() {
  return window.localStorage.getItem(tokenName);
};

/**
 * 
 * @param {*} token 
 * @return {undefined} void return
 */
const setLocalToken = function setLocalToken(token) {
  window.localStorage.setItem(tokenName,"Bearer " + token);
};

/**
 * 
 * @return {undefined} void return
 */
const deleteLocalToken = function deleteLocalToken() {
  window.localStorage.removeItem(tokenName);
};

const logUserOut = function logUserOut(vm) {
  deleteLocalToken();
  vm.$router.push({ path: loginPath });
};

/**
 * 
 * @return {boolean} True if user is logged in, false otherwise
 */
const isLoggedIn = function isLoggedIn() {
  return Boolean(getLocalToken());
};

export default {
  deleteLocalToken,
  getLocalToken,
  isLoggedIn,
  logUserOut,
  setLocalToken
};