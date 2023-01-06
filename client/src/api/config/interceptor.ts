import { Instance } from './types';

const interceptor = (instance: Instance) => {
  instance.interceptors.response.use(
    ({ data }) => data,
    ({ response }) => {
      if (!response) {
        const error = {
          status: 500,
          message: '네트워크 에러',
        };

        return Promise.reject(error);
      }

      const error = {
        status: response.status,
        message: response.data.details,
      };

      return Promise.reject(error);
    },
  );
};

export default interceptor;
