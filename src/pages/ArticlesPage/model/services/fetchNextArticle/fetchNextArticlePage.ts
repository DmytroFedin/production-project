import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlePageHasMore, getArticlePageIsLoading, getArticlePageNumber,
} from '../../selectors/articlesPageSelectors';
import { ArticlePageActions } from '../../slice/articlesPageSlice';
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
        dispatch(ArticlePageActions.setPage(page + 1));
        dispatch(fetchArticlesList({}));
      }
    },
  );
