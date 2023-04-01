import { ArticleType } from 'entities/Article';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T extends ArticleType> {
  value: T;
  content: ReactNode;
}

interface TabsProps <T extends ArticleType> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: T) => void;
}

export const Tabs = <T extends ArticleType>({
  className, tabs, value, onTabClick,
}: TabsProps<T>) => {
  const { t } = useTranslation();

  const onClickHandler = (tab: T) => {
    onTabClick?.(tab);
  };

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
          key={tab.value}
          className={cls.tabWrapper}
          onCardClick={() => onClickHandler(tab.value)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
