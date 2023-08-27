import axios from 'axios';
import { API_HOST } from '../config';

const reissueAccessToken = async () => {
  try {
    const { headers } = await axios.get(`${API_HOST}/auth/reissue`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    const token = headers.authorization;

    return `${token}`;
  } catch (error) {
    localStorage.removeItem('ACCESS_TOKEN');
  }
};

const createService = () => {
  const service = axios.create({
    baseURL: API_HOST,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

  service.interceptors.request.use((request) => {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');

    if (accessToken) {
      request.headers.Authorization = accessToken;
    }

    return request;
  });

  service.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401) {
        const accessToken = await reissueAccessToken();

        if (accessToken) {
          localStorage.setItem('ACCESS_TOKEN', accessToken);
          originalRequest.headers.Authorization = accessToken;
        }

        return axios(originalRequest);
      }

      return Promise.reject(error);
    }
  );

  return service;
};

const Service = createService();

export default Service;
