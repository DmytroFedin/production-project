import {
  ImgHTMLAttributes, ReactElement, memo, useLayoutEffect, useState,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppImage.module.scss';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src?: string;
  width?: string;
  height?: string
  alt: string
  errorFallback?: ReactElement;
  fallback?: ReactElement;
  round?: boolean
}

export const AppImage = memo(({
  className, round, src, height, width, alt, errorFallback, fallback, ...otherProps
}: AppImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const mods: Mods = {
    [cls.round]: round,
  };

  useLayoutEffect(() => {
    const image = new Image();
    image.src = src ?? '';
    image.onload = () => {
      setIsLoading(false);
    };
    image.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }
  return (
    <img
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={classNames('', mods, [className])}
      {...otherProps}
    />
  );
});
