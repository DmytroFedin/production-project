import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '5' | '10' | '15' | '30' | '50';

type divProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends divProps{
  className?: string;
  children: ReactNode;
  justify?: FlexJustify,
  align?: FlexAlign,
  direction?: FlexDirection,
  gap?: FlexGap,
  max?: boolean
  wrap?: boolean
}

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  5: cls.gap5,
  10: cls.gap10,
  15: cls.gap15,
  30: cls.gap30,
  50: cls.gap50,
};

export const Flex = ({
  className, children, justify = 'start', align = 'center', direction = 'row', gap, max,
  wrap,
}: FlexProps) => {
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];
  const mods: Mods = {
    [cls.max]: max,
    [cls.wrap]: wrap,
  };
  return (
    <div className={classNames(cls.Flex, mods, classes)}>
      {children}
    </div>
  );
};
