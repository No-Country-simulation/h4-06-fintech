import {
  LoginWithPasswordParams,
  LoginWithPasswordResponse,
} from './loginWithPassword';
import { SignUpResponse, SingUpParams } from './signup';

export interface AuthAPI {
  signup: (params: SingUpParams) => Promise<SignUpResponse>;
  loginWithPassword: (
    params: LoginWithPasswordParams,
  ) => Promise<LoginWithPasswordResponse>;
}
