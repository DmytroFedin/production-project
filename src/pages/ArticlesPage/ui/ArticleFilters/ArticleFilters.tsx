import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import {
  ArticleSortField,
  ArticleView,
} from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/filters/filters';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import {
  getArticleOrder, getArticleSearch, getArticleSort,
  getArticleView,
} from '../../../../features/ArticleSort/model/selectors/articleSort';
import { ArticleSortActions, ArticleSortReducer } from '../../../../features/ArticleSort/model/slice/articleSortSlice';
import { ArticleSort } from '../../../../features/ArticleSort/ui/ArticleSort/ArticleSort';
import { ArticleTypeTabs } from '../../../../features/ArticleSort/ui/ArticleTypeTabs/ArticleTypeTabs';
import cls from './ArticleFilters.module.scss';
import { ArticleType } from '@/shared/const/article';

interface ArticleFiltersProps {
  className?: string;
  fetchData: () => void;
  setPage: (number: number) => void;
}

export const ArticleFilters = ({ className, fetchData, setPage }: ArticleFiltersProps) => {
  const { t } = useTranslation('article');
  const view = useSelector(getArticleView);
  const sort = useSelector(getArticleSort);
  const order = useSelector(getArticleOrder);
  const search = useSelector(getArticleSearch);
  const dispatch = useAppDispatch();

  const reducers: ReducersList = {
    articleSort: ArticleSortReducer,
  };

  // const fetchData = useCallback(() => {
  //   dispatch(fetchArticlesList({ replace: true }));
  // }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(ArticleSortActions.setView(view));
  }, [dispatch]);

  const onChangeSort = useCallback((sort: ArticleSortField) => {
    dispatch(ArticleSortActions.setSort(sort));
    setPage(1);
    fetchData();
  }, [dispatch, fetchData, setPage]);

  const onChangeOrder = useCallback((order: SortOrder) => {
    dispatch(ArticleSortActions.setOrder(order));
    setPage(1);
    fetchData();
  }, [dispatch, fetchData, setPage]);

  const onChangeSearch = useCallback((search: string) => {
    dispatch(ArticleSortActions.setSearch(search));
    setPage(1);
    debounceFetchData();
  }, [dispatch, setPage, debounceFetchData]);

  const onChangeType = useCallback((tab: ArticleType) => {
    dispatch(ArticleSortActions.setType(tab));
    setPage(1);
    fetchData();
  }, [dispatch, fetchData, setPage]);

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
