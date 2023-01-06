import { Instance } from './types';

const interceptor = (instance: Instance) => {
  instance.interceptors.response.use(({ data }) => data);
};

export default interceptor;
