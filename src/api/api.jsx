import axios from 'axios';
const API_URL = "https://slippery-maure-library-app-1f364efd.koyeb.app/api/v1";


export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
