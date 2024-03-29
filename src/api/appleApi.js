import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://tranquil-shelf-04975.herokuapp.com/";

export function getApple() {
  return fetch(baseUrl + "apple/")
    .then(handleResponse)
    .catch(handleError);
}

export function getSamsung() {
  return fetch(baseUrl + "samsung/")
    .then(handleResponse)
    .catch(handleError);
}

export function getXiaomi() {
  return fetch(baseUrl + "xiaomi/")
    .then(handleResponse)
    .catch(handleError);
}

export function getHonor() {
  return fetch(baseUrl + "honor/")
    .then(handleResponse)
    .catch(handleError);
}

export function getHuawei() {
  return fetch(baseUrl + "huawei/")
    .then(handleResponse)
    .catch(handleError);
}
