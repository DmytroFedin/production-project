import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>>(
    'articlePage/initArticlePage',
    async (_, thunkApi) => {
      const {
        dispatch,
      } = thunkApi;

      dispatch(ArticlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    },
  );
