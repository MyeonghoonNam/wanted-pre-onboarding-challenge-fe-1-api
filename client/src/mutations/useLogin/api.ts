import { api } from '@api/index';
import type { LoginFormInput, Login } from './types';

const RESOURCE = '/users';

export const loginApi = (data: LoginFormInput) =>
  api.post<Login>(`${RESOURCE}/login`, data);
