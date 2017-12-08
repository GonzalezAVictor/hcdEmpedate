
const API_ENDPOINT = 'http://dry-savannah-56767.herokuapp.com/api/';

function createHeaders() {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Auth', 1);
  return headers;

}

module.exports = {

  getAllUsers() {
    return fetch(API_ENDPOINT.concat(`users`), 
      {
        method: 'GET',
        headers: createHeaders(),
      }
    ).then((response) => response.json());
  },

};

// fetch("https://mywebsite.com/endpoint/", {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     firstParam: "yourValue",
//     secondParam: "yourOtherValue"
//   })
// });