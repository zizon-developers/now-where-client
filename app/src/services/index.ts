import axios from 'axios';
import { API_HOST } from '../config';

const createService = () => {
  const service = axios.create({
    baseURL: API_HOST,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return service;
};

const Service = createService();

export default Service;
