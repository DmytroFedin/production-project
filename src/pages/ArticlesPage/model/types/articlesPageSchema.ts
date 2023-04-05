import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  limit: number;
  page: number;
  hasMore: boolean;

  _inited: boolean;
}
