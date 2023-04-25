import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
  Article, ArticleSortField, ArticleView,
} from '@/entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { SortOrder } from '@/shared/types/filters/filters';
import { ArticleSortSchema } from '../types/articleSort';
import { ArticleType } from '@/shared/const/article';

const articleSortAdapter = createEntityAdapter<Article>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (article) => article.id,
});

export const getArticleSorted = articleSortAdapter.getSelectors<StateSchema>(
  (state) => state.articleSort || articleSortAdapter.getInitialState(),
);

const ArticleSortSlice = createSlice({
  name: 'ArticleDetailsArticleslice',
  initialState: articleSortAdapter.getInitialState<ArticleSortSchema>({
    sort: ArticleSortField.CREATED,
    order: 'asc',
    search: '',
    ids: [],
    entities: {},
    view: ArticleView.LIST,
    type: ArticleType.ALL,
    _inited: false,
  }),
  reducers: {
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setInited: (state) => {
      state._inited = true;
    },
  },
});

export const { reducer: ArticleSortReducer } = ArticleSortSlice;
export const { actions: ArticleSortActions } = ArticleSortSlice;
