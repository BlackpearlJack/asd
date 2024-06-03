import axios from 'axios';

// export const request = axios.create({
//   baseURL: import.meta.env.VITE_APP_API_URL,
//   headers: {
//     Authorization: 'bearer ' + import.meta.env.VITE_APP_API_TOKEN,
//   },
// });


const apiToken = import.meta.env.VITE_API_TOKEN;
const apiBaseUrl = import.meta.env.VITE_API_URL;

export const request = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
});


