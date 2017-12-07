
const API_ENDPOINT = 'http://dry-savannah-56767.herokuapp.com/api/';

function createHeaders() {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Auth', 1);
  return headers;

}

module.exports = {

  getById(eventId) {
    return fetch(API_ENDPOINT.concat(`events/${eventId}`), 
      {
        method: 'GET',
        headers: createHeaders(),
      }
    ).then((response) => response.json());
  },

  getEventsInvted() {
    return fetch(API_ENDPOINT.concat(`events`), 
      {
        method: 'GET',
        headers: createHeaders(),
      }
    ).then((response) => response.json());
  },

  getEventsCreated() {
    return fetch(API_ENDPOINT.concat(`events?creator=true`), 
      {
        method: 'GET',
        headers: createHeaders(),
      }
    ).then((response) => response.json());
  },

  createOne(data) {
    console.log(data);

    let newData = {
  "created_by" : 1,
  "name" : "Fiesta de pájaro man",
  "address" : "c152 x44 y 46 col Magnolias",
  "start_time" : "2017-12-04 11:23:32"
};
  
  console.log(newData);


    return fetch(API_ENDPOINT.concat(`events`), {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringify(data)
    }).then((response) => response.json());
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