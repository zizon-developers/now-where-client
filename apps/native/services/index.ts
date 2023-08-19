import axios from 'axios';
import API_HOST from '../configs';

const createService = (baseURL: string) => {
  const service = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return service;
};

export const LocationService = createService(API_HOST.Location);
