import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
  getArticlePageHasMore, getArticlePageIsLoading, getArticlePageNumber,
} from '../../selectors/articlesPageSelectors';
import { ArticlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>>(
    'articlePage/fetchNextArticlePage',
    async (_, thunkApi) => {
      const {
        getState, dispatch,
      } = thunkApi;
      const hasMore = getArticlePageHasMore(getState());
      const isLoading = getArticlePageIsLoading(getState());
      const page = getArticlePageNumber(getState());

      if (hasMore && !isLoading) {
        dispatch(ArticlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesList({ page }));
      }
    },
  );
