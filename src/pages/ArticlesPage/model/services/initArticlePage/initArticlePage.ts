import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleView } from 'entities/Article';
import { ArticleSortActions, ArticleSortSchema, getArticleView } from 'features/ArticleSort';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { SortOrder } from 'shared/types/filters/filters';
import { getArticlePageInited } from '../../selectors/articlesPageSelectors';
import { ArticlePageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlePage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>>(
    'articlePage/initArticlePage',
    async (searchParams, thunkApi) => {
      const {
        getState, dispatch,
      } = thunkApi;
      const inited = getArticlePageInited(getState());

      if (!inited) {
        searchParams.forEach((value, key) => {
          if (value) {
            switch (key) {
            case 'order':
              dispatch(ArticleSortActions.setOrder(value as SortOrder));
              break;

            case 'sort':
              dispatch(ArticleSortActions.setSort(value as ArticleSortField));
              break;

            case 'search':
              dispatch(ArticleSortActions.setSearch(value));
              break;

            default:
              break;
            }
          }
        });
        const initView = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY);
        if (initView) {
          dispatch(ArticleSortActions.setView(initView as ArticleView));
        }

        dispatch(ArticlePageActions.initState());
        dispatch(fetchArticlesList({}));
      }
    },
  );
