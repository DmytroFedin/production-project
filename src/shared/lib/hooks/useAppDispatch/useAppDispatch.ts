import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/StoreProvider';

/**
 * For redux-thunk users: the return type of the returned dispatch functions for thunks is incorrect.
 * @returns Hook with a correctly typed dispatch function typed from the store's dispatch function.
 */

export const useAppDispatch = () => useDispatch<AppDispatch>();
