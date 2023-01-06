import axios from 'axios';
import interceptor from './interceptor';
import type { Instance } from './types';

const createInstance = () => {
  const instance: Instance = axios.create({
    baseURL: 'http://localhost:8080',
  });

  interceptor(instance);

  return instance;
};

const instance = createInstance();

export default instance;
