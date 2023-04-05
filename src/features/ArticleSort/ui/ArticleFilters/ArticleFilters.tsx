import { ArticleSortField, ArticleView } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { ArticlesPageActions } from 'pages/ArticlesPage';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from 'shared/types/filters/filters';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import {
  getArticleOrder, getArticleSearch, getArticleSort,
  getArticleView,
} from '../../model/selectors/articleSort';
import { ArticleSortActions, ArticleSortReducer } from '../../model/slice/articleSortSlice';
import { ArticleSort } from '../../ui/ArticleSort/ArticleSort';
import { ArticleTypeTabs } from '../ArticleTypeTabs/ArticleTypeTabs';
import cls from './ArticleFilters.module.scss';

interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticleFilters = ({ className }: ArticlePageFiltersProps) => {
  const { t } = useTranslation('article');
  const view = useSelector(getArticleView);
  const sort = useSelector(getArticleSort);
  const order = useSelector(getArticleOrder);
  const search = useSelector(getArticleSearch);
  const dispatch = useAppDispatch();

  const reducers: ReducersList = {
    articleSort: ArticleSortReducer,
  };

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(ArticleSortActions.setView(view));
  }, [dispatch]);

  const onChangeSort = useCallback((sort: ArticleSortField) => {
    dispatch(ArticleSortActions.setSort(sort));
    dispatch(ArticlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeOrder = useCallback((order: SortOrder) => {
    dispatch(ArticleSortActions.setOrder(order));
    dispatch(ArticlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((search: string) => {
    dispatch(ArticleSortActions.setSearch(search));
    dispatch(ArticlesPageActions.setPage(1));
    debounceFetchData();
  }, [dispatch, debounceFetchData]);

  const onChangeType = useCallback((tab: ArticleType) => {
    dispatch(ArticleSortActions.setType(tab));
    dispatch(ArticlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSort order={order} sort={sort} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
          <ArticleViewSelector className={cls.viewWrapper} view={view} onViewClick={onChangeView} />
        </div>
        <Card className={cls.searchWrapper}>
          <Input value={search} onChange={onChangeSearch} title={t('Search')} />
        </Card>
        <ArticleTypeTabs className={cls.tabs} onChangeType={onChangeType} />
      </div>
    </DynamicModuleLoader>
  );
};
