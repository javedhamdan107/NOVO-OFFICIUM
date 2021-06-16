import axios from 'axios';

const {REACT_APP_DB} = process.env;

const API = axios.create({ baseURL: REACT_APP_DB });

export const fetchUsers = () => API.get('/user');