import { UserType } from 'types/User';

export interface AuthState {
  user: UserType;
  isAuth: boolean;
}
