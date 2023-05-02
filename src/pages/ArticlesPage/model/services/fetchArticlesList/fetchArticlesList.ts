import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
  getArticleOrder, getArticleSearch, getArticleSort, getArticleType,
} from '@/features/ArticleSort';
import { getArticlePageLimit, getArticlePageNumber } from '../../selectors/articlesPageSelectors';
import { ArticleType } from '@/shared/const/article';

interface fetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  fetchArticlesListProps,
  ThunkConfig<string>>(
    'articlePage/fetchArticlesList',
    async (props, thunkApi) => {
      const { extra, rejectWithValue, getState } = thunkApi;
      const limit = getArticlePageLimit(getState());
      const page = getArticlePageNumber(getState());
      const sort = getArticleSort(getState());
      const order = getArticleOrder(getState());
      const search = getArticleSearch(getState());
      const type = getArticleType(getState());

      try {
        addQueryParams({
          order, sort, search, type,
        });
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
            _limit: limit,
            _page: page,
            _sort: sort,
            _order: order,
            q: search,
            type: type === ArticleType.ALL ? undefined : type,
          },
        });

        if (!response.data) {
          throw new Error('no response data');
        }

        return response.data;
      } catch (error) {
        return rejectWithValue('error');
      }
    },
  );
