import { api } from '@api/index';
import type { SignUpFormInput, SignUp } from './types';

const RESOURCE = '/users';

export const signUpApi = async (data: SignUpFormInput) =>
  api.post<SignUp>(`${RESOURCE}/create`, data);
