import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema } from '../types/RestoreScrollSchema';

const initialState: ScrollSchema = {
  scroll: {},
};

export const restoreScrollSlice = createSlice({
  name: 'restoreScroll',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload } : PayloadAction<{path: string, position: number}>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: restoreScrollActions } = restoreScrollSlice;
export const { reducer: restoreScrollReducer } = restoreScrollSlice;
