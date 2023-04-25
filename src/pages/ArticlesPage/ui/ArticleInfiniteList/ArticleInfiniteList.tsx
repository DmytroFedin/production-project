import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { ArticleList } from '@/entities/Article';
import { getArticleView } from '@/features/ArticleSort';
import { Text, TextTheme } from '@/shared/ui/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getArticlePageError,
  getArticlePageIsLoading,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slice/articlesPageSlice';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticle/fetchNextArticlePage';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = ({ className }: ArticleInfiniteListProps) => {
  const { t } = useTranslation('article');
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticleView);
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticlePage());
    }
  }, [dispatch]);

  if (error) {
    return <Text text={t('Articles_loading_error')} theme={TextTheme.ERROR} />;
  }

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
      onLoadNextPart={onLoadNextPart}
    />
  );
};
