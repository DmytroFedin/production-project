import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/avatar-fallback-32_32.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string
  size?: number
  fallBackInverted?: boolean
}

/**
 * Element to show user picture
 * @param className additional className from parent
 * @param src src of the picture
 * @param alt alternative description of the picture
 * @param size size of the picture
 * @param fallBackInverted color of the fallback icon
 */

export const Avatar = ({
  className, src, fallBackInverted, alt = 'user profile picture', size,
}: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);
  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = (
    <Icon
      inverted={fallBackInverted}
      width={size || 100}
      height={size || 100}
      Svg={UserIcon}
      viewBox="0 0 32 32"
    />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      style={styles}
      alt={alt}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
};
