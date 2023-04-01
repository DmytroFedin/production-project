import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  Article, ArticleSortField, ArticleType, ArticleView,
} from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { SortOrder } from 'shared/types/filters/filters';
import { ArticleSortSchema } from '../types/articleSort';

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
    // initState: (state) => {
    //   const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
    //   state.view = view;
    //   state.limit = view === ArticleView.LIST ? 9 : 4;
    //   state._inited = true;
    // },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchArticlesList.pending, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(fetchArticlesList.fulfilled, (
  //       state,
  //       action: PayloadAction<Article[]>,
  //     ) => {
  //       state.isLoading = false;
  //       articleSortAdapter.addMany(state, action.payload);
  //       state.hasMore = action.payload.length > 0;
  //     })
  //     .addCase(fetchArticlesList.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { reducer: ArticleSortReducer } = ArticleSortSlice;
export const { actions: ArticleSortActions } = ArticleSortSlice;
