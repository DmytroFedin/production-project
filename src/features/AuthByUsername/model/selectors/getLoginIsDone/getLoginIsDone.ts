import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginIsDone = (state: StateSchema) => state?.loginForm?.isDone || false;
