import { EntityState } from '@reduxjs/toolkit';
import {
  Article, ArticleSortField, ArticleView, ArticleType,
} from 'entities/Article';

import { SortOrder } from 'shared/types/filters/filters';

export interface ArticleSortSchema extends EntityState<Article> {
  sort: ArticleSortField;
  order: SortOrder;
  search: string;
  view: ArticleView;
  type: ArticleType
}
