import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleView } from '@/entities/Article';
import { ArticleType } from '@/shared/const/article';

export
const getArticleSort = (state: StateSchema) => state.articleSort?.sort ?? ArticleSortField.CREATED;
export const getArticleOrder = (state: StateSchema) => state.articleSort?.order ?? 'asc';
export const getArticleSearch = (state: StateSchema) => state.articleSort?.search ?? '';
export const getArticleView = (state: StateSchema) => state.articleSort?.view || ArticleView.LIST;
export const getArticleType = (state: StateSchema) => state.articleSort?.type || ArticleType.ALL;
export const getArticleInited = (state: StateSchema) => state.articleSort?._inited;
