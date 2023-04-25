import { memo } from 'react';
import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/list-24_24.svg';
import PlateIcon from '@/shared/assets/icons/plate-24_24.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
  {
    view: ArticleView.PLATE,
    icon: PlateIcon,
  },
];

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((type) => (
        <Button
          key={type.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(type.view)}
        >
          <Icon Svg={type.icon} className={classNames('', { [cls.notSelected]: type.view !== view })} />
        </Button>
      ))}
    </div>
  );
});
