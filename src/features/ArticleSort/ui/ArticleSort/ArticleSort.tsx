import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types/filters/filters';
import cls from './ArticleSort.module.scss';

interface ArticleSortProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSort = memo(({
  className, sort, order, onChangeOrder, onChangeSort,
}: ArticleSortProps) => {
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('Sort_ascending'),
    },
    {
      value: 'desc',
      content: t('Sort_descending'),
    },
  ], [t]);

  const SortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('Sort_date'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('Sort_title'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('Sort_views'),
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticleSort, {}, [className])}>
      <Select value={sort} onChange={onChangeSort} options={SortFieldOptions} label={t('Sort_select')} />
      <Select value={order} onChange={onChangeOrder} options={orderOptions} label={t('Order_select')} />
    </div>
  );
});
