import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { canEditArticle } from '../../model/selectors/article/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(canEditArticle);
  const article = useSelector(getArticleDetailsData);
  const onBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [article, navigate]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button ariaLabel="Return to article list button" onClick={onBackToList}>
        {t('Return_to_articles', { ns: 'article' })}
      </Button>
      {canEdit && (
        <Button ariaLabel="Edit article button" onClick={onEditArticle}>
          {t('Edit_article', { ns: 'article' })}
        </Button>
      )}
    </HStack>
  );
};
