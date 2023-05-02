/* eslint-disable max-len */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  ArticleFilters, ArticleSortActions, getArticleInited, initArticleSort,
} from '@/features/ArticleSort';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { initArticlePage } from '../model/services/initArticlePage/initArticlePage';
import { ArticlesPageActions, ArticlesPageReducer } from '../model/slice/articlesPageSlice';
import { ArticleInfiniteList } from './ArticleInfiniteList/ArticleInfiniteList';
import cls from './ArticlesPage.module.scss';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: ArticlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const inited = useSelector(getArticleInited);

  useInitialEffect(() => {
    dispatch(initArticleSort(searchParams));
    if (!inited) {
      dispatch(initArticlePage());
      dispatch(ArticleSortActions.setInited());
    }
  });

  const fetchArticles = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const setPage = useCallback((number: number) => {
    dispatch(ArticlesPageActions.setPage(number));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page className={classNames(cls.ArticlesPage, {}, [className])}>
        {/* {t('Articles_Page_header')} */}
        <ArticleFilters setPage={setPage} fetchData={fetchArticles} />
        <ArticleInfiniteList />
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticlesPage);
