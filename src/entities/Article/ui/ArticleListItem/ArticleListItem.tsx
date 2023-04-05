import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import EyeIcon from 'shared/assets/icons/eye-20_20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(({
  className, article, view, target,
}: ArticleListItemProps) => {
  const { t } = useTranslation('article');

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const title = <Text text={article.title} className={cls.title} />;
  const date = <Text className={cls.date} text={article.createdAt} />;
  const image = <img className={cls.image} src={article.img} alt={article.title} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === 'PLATE') {
    const textblock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Avatar src={article.user.avatar} size={30} />
            <Text text={article.user.username} className={cls.username} />
            {date}
          </div>
          {title}
          {types}
          {image}
          {textblock && (
            <ArticleTextBlockComponent block={textblock} className={cls.textblock} />
          )}
          <div className={cls.footer}>
            <AppLink to={RoutePath.article_details + article.id} target={target}>
              <Button>
                {t('Read_article_Btn')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      to={RoutePath.article_details + article.id}
    >
      <Card>
        <div className={cls.imageWrapper}>
          {image}
          {date}
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        {title}
      </Card>
    </AppLink>
  );
});
