import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/cart/";

export function getCart() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function addItem(item) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteItem(item) {
  return fetch(baseUrl, {
    method: "DELETE",
    body: JSON.stringify(item),
  });
}
