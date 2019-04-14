 import fetch from 'isomorphic-fetch'
 import config from '../config'

 export default function callAPI(endpoint, token, options, payload) { // endpoint - адрес куда обращаться, payload - данные которые передем в теле запроса
   const authHeaders = token ? {
     'Authorization': `Bearer ${token}`,
   } : {};

   return fetch(`${config.API_URL}/${endpoint}`, {
       method: 'GET',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         ...authHeaders
       },
       body: JSON.stringify(payload),
       ...options
     })
     .then(res => res.json())
     .then(json => {
       if (json.success) {
         return json;
       }
       throw new Error(json.message);
     })
 }
