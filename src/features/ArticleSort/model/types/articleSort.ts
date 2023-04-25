import { EntityState } from '@reduxjs/toolkit';
import {
  Article, ArticleSortField, ArticleView,
} from '@/entities/Article';

import { SortOrder } from '@/shared/types/filters/filters';
import { ArticleType } from '@/shared/const/article';

export interface ArticleSortSchema extends EntityState<Article> {
  sort: ArticleSortField;
  order: SortOrder;
  search: string;
  view: ArticleView;
  type: ArticleType;
  _inited: boolean;
}
