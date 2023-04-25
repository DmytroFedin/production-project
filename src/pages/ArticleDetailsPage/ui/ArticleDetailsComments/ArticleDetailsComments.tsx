import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Suspense, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AddNewComment } from '@/features/AddNewComment';
import { CommentList } from '@/entities/Comment';
import { Text } from '@/shared/ui/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/shared/ui/Stack';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Loader } from '@/shared/ui/Loader';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments/comments';
import { addCommentsForArticle } from '../../model/services/addCommentsForArticle/addCommentsForArticle';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentSlice';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
  render: boolean;
}

export const ArticleDetailsComments = ({ className, id, render }: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation('translation');
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const dispatch = useAppDispatch();

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentsForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <VStack align="start" max gap="15" className={classNames('', {}, [className])}>
      {render && (
        <>
          <Text title={t('Comments_header')} />
          <Suspense fallback={<Loader />}>
            <AddNewComment onSendComment={onSendComment} />
          </Suspense>
          <CommentList
            isLoading={isLoading}
            comments={comments}
          />
        </>
      )}

    </VStack>
  );
};
