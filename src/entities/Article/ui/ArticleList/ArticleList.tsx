import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  hasMore?: boolean;
  onLoadNextPart: () => void
}

export const ArticleList = memo(({
  className, articles, target, isLoading, onLoadNextPart, hasMore, view = ArticleView.LIST,
}: ArticleListProps) => {
  const { t } = useTranslation('article');

  const loadMoreItems = () => {};

  const isItemLoaded = (index: number) => !isLoading;

  const Row = useCallback((props: ListChildComponentProps) => {
    const { data, index, style } = props;
    return (
      <ArticleListItem target={target} key={index} article={articles[index]} view={view} />
    );
  }, [articles, target, view]);

  const renderArticle = (article: Article) => (
    <ArticleListItem target={target} key={article.id} article={article} view={view} />
  );
  const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.LIST ? 9 : 4)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton key={index} view={view} />
    ));

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Article_not_found')} />
      </div>
    );
  }

  return (
    // <InfiniteLoader
    //   isItemLoaded={isItemLoaded}
    //   itemCount={articles.length}
    //   loadMoreItems={onLoadNextPart}
    // >
    //   {({ onItemsRendered, ref }) => (
    //     <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
    //       <List
    //         // style={{ overflow: 'visible' }}
    //         height={700}
    //         itemCount={articles.length}
    //         itemSize={700}
    //         width="100%"
    //       >
    //         {Row}
    //       </List>
    //       {isLoading && (
    //         getSkeletons(view)
    //       )}
    //     </div>
    //   )}
    // </InfiniteLoader>
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && (
        getSkeletons(view)
      )}
    </div>
  );
});
