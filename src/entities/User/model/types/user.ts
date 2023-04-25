import { UserRole } from '../const/const';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface UserSchema {
  authData?: User;

  mounted: boolean;
}
