import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../api/ArticleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation('article');
  const user = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRating({
    userId: user?.id ?? '',
    articleId,
  });
  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: user?.id ?? '',
        articleId,
        rate: starsCount,
        feedback,
      });
    } catch (e) {
      // handle error
      console.log(e);
    }
  }, [articleId, rateArticleMutation, user?.id]);

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  }, [handleRateArticle]);

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  const rating = data?.[0];

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }
  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      title={t('Rate_Article_title')}
      feedbackTitle={t('Rate_Article_feedback_title')}
      hasFeedback
    />
  );
});

export default ArticleRating;
