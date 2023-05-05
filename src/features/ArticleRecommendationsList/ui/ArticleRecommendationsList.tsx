import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../api/ArticleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(({ className }: ArticleRecommendationsListProps) => {
  const { t } = useTranslation('article');
  const { isLoading, data, error } = useArticleRecommendationsList(5);

  if (isLoading || error || !data) {
    return null;
  }

  return (
    <VStack
      data-testid="ArticleRecommendationsList"
      max
      align="start"
      gap="15"
      className={classNames('', {}, [className])}
    >
      <Text size={TextSize.L} title={t('Article_Recommendation')} />
      <ArticleList
        target="_blank"
        articles={data}
        isLoading={isLoading}
        virtualized={false}
      />
    </VStack>
  );
});
