import axios from 'axios';

export const baseURL = 'https://5d6da1df777f670014036125.mockapi.io/';

export const api = axios.create({
  baseURL
});