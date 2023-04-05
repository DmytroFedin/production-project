/* eslint-disable max-len */
import { ArticleList } from 'entities/Article';
import { ArticleFilters, getArticleView } from 'features/ArticleSort';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page';
import {
  getArticlePageError, getArticlePageHasMore, getArticlePageIsLoading,
} from '../model/selectors/articlesPageSelectors';
import { fetchNextArticlePage } from '../model/services/fetchNextArticle/fetchNextArticlePage';
import { initArticlePage } from '../model/services/initArticlePage/initArticlePage';
import { ArticlesPageReducer, getArticles } from '../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: ArticlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const hasMore = useSelector(getArticlePageHasMore);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticleView);
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticlePage());
    }
  }, [dispatch]);

  useInitialEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(initArticlePage(searchParams));
    }
  });
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
        {/* {t('Articles_Page_header')} */}
        <ArticleFilters />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          hasMore={hasMore}
          onLoadNextPart={onLoadNextPart}
        />
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticlesPage);
