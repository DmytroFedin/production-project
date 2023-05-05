import {
  HTMLAttributeAnchorTarget,
  memo,
  useEffect,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import cls from './ArticleList.module.scss';
import { ARTICLE_INDEX_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleView } from '../../model/const/const';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article } from '../../model/types/article';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  onLoadNextPart?: () => void;
  virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) => new Array(5)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton key={index} view={view} />
  ));

const ScrollSkeleton = memo(() => (
  <HStack gap="50" justify="between" wrap max className={cls.ScrollSkeleton}>
    <ArticleListItemSkeleton view={ArticleView.LIST} />
  </HStack>
));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    target,
    isLoading,
    onLoadNextPart,
    virtualized = true,
    view = ArticleView.LIST,
  } = props;
  const { t } = useTranslation('article');
  const [returnIndex, setReturnIndex] = useState(1);

  useEffect(() => {
    const index = localStorage.getItem(ARTICLE_INDEX_LOCALSTORAGE_KEY) || 1;
    setReturnIndex(+index);
  }, []);

  const renderArticleV = (index: number, article: Article) => (
    <ArticleListItem index={index} target={target} key={article.id} article={article} view={view} />
  );

  const renderArticle = (article: Article) => (
    <ArticleListItem target={target} key={article.id} article={article} view={view} />
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const Footer = memo(() => {
    if (isLoading) {
      if (view === ArticleView.LIST) {
        return (
          <HStack gap="50" justify="center" wrap max className={cls.skeletonGrid}>
            {getSkeletons(view)}
          </HStack>
        );
      }
      return (
        <>
          {getSkeletons(view)}
        </>
      );
    }
    return null;
  });

  if (!isLoading && !articles.length) {
    return (
      <HStack justify="center" max className={classNames('', {}, [className])}>
        <Text size={TextSize.L} title={t('Article_not_found')} />
      </HStack>
    );
  }

  if (!virtualized) {
    return (
      <HStack justify="center" wrap gap="30" max className={classNames('', {}, [className, cls[ArticleView.LIST]])}>
        {articles.length > 0
          ? articles.map(renderArticle)
          : null}
        {isLoading && (
          getSkeletons(ArticleView.LIST)
        )}
      </HStack>
    );
  }

  return (
    <VStack data-testid="ArticlesList" max className={classNames(cls.ArticleListWrapper, {}, [className])}>
      {view === ArticleView.PLATE ? (
        <Virtuoso
          style={{ width: '100%', height: '100%' }}
          data={articles}
          itemContent={renderArticleV}
          atBottomStateChange={onLoadNextPart}
          initialTopMostItemIndex={returnIndex}
          components={
            { Footer }
          }
        />
      )
        : (
          <VirtuosoGrid
            style={{ width: '100%' }}
            data={articles}
            itemContent={renderArticleV}
            listClassName={cls.itemWrapper}
            atBottomStateChange={onLoadNextPart}
            components={
              {
                ScrollSeekPlaceholder: ScrollSkeleton,
                Footer,
              }
            }
            scrollSeekConfiguration={{
              enter: (velocity) => Math.abs(velocity) > 300,
              exit: (velocity) => Math.abs(velocity) < 30,
            }}
          />
        )}
    </VStack>
  );
});
