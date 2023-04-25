import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import Star from '../../assets/icons/star-24_24.svg';
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
  className?: string;
  size?: number;
  selectedStars?: number;
  onSelect?: (starsSelect: number) => void;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(({
  className, size = 30, selectedStars = 0, onSelect,
}: StarRatingProps) => {
  const { t } = useTranslation();
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          className={classNames(cls.starIcon, {
            [cls.hovered]: currentStarsCount >= starNumber,
            [cls.normal]: !(currentStarsCount >= starNumber),
            [cls.selected]: isSelected && currentStarsCount >= starNumber,
          }, [className])}
          Svg={Star}
          key={starNumber}
          width={size}
          height={size}
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
});
