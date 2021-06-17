import axios from 'axios';

import config from '../config.js';

const URL = config.REACT_APP_DB_URL;

const API = axios.create({ baseURL: URL });

export const fetchUsers = () => API.get('/user');