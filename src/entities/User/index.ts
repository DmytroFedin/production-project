import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';
import { userActions, userReducer } from './model/slice/userSlice';
import type { UserSchema, User } from './model/types/user';

export { UserRole } from './model/const/const';

export { getUserRoles, isUserAdmin, isUserManager } from './model/selectors/getUserRoles/getUserRoles';

export {
  userReducer, userActions, UserSchema, User, getUserAuthData, getUserMounted,
};
