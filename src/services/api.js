import axios from 'axios';
const dotenv = require('dotenv');

const api = axios.create({
  baseURL: process.env.URL_API
});

export default api;