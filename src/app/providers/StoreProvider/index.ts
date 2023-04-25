import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export type {
  StateSchema, ThunkConfig, ReduxStoreWithManager, StateSchemaKey,
} from './config/StateSchema';
export type { AppDispatch } from './config/store';
export {
  StoreProvider, createReduxStore,
};
