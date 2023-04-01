import { ArticleDetails } from 'entities/Article';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { CommentList } from 'entities/Comment';
import { AddNewComment } from 'features/AddNewComment';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Button } from 'shared/ui/Button/Button';
import { Page } from 'widgets/Page';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/comments/comments';
import { addCommentsForArticle } from '../model/services/addCommentsForArticle/addCommentsForArticle';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsReducer, getArticleComments } from '../model/slices/ArticleDetailsCommentSlice';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation(['translation', 'article']);
  const { id } = useParams<{id:string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentsForArticle(text));
  }, [dispatch]);

  const reducers: ReducersList = {
    articleDetailsComments: ArticleDetailsCommentsReducer,
  };

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames(cls.error, {}, [className])}>
        <Text size={TextSize.L} title={t('Article_not_found', { ns: 'article' })} />
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        {article && (
          <>
            <Text className={cls.commentHeader} title={t('Comments_header')} />
            <AddNewComment onSendComment={onSendComment} />
            <CommentList
              isLoading={isLoading}
              comments={comments}
            />
          </>
        )}
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
