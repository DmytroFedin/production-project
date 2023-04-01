import { ArticleType } from 'entities/Article';
import { getArticleType } from 'features/ArticleSort/model/selectors/articleSort';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import cls from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
  className?: string;
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo(({ className, onChangeType }: ArticleTypeTabsProps) => {
  const { t } = useTranslation('article');
  const type = useSelector(getArticleType);
  const TypeTabs = useMemo<TabItem<ArticleType>[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('All_tab_title'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Economics_tab_title'),
    },
    {
      value: ArticleType.IT,
      content: t('IT_tab_title'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Science_tab_title'),
    },
  ], [t]);

  return (
    <Tabs
      value={type}
      tabs={TypeTabs}
      onTabClick={onChangeType}
      className={classNames(cls.ArticleTypeTabs, {}, [className])}
    />
  );
});
