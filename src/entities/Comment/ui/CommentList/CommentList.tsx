import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, isLoading, comments }: CommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack max gap="15" className={classNames('', {}, [className])}>
        {comments?.length
        && comments.map((comment) => (
          <CommentCard
            key={comment.id}
            isLoading
          />
        ))}
      </VStack>
    );
  }

  return (
    <VStack gap="15" max className={classNames('', {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
        : <Text text={t('Comments_not_found')} />}
    </VStack>
  );
});
