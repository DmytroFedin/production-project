import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [fullview, isFullview] = useState(false);
  const sidebarItemList = useSelector(getSidebarItems);

  const toggleSidebar = () => {
    isFullview((prev) => !prev);
  };

  return (
    <section
      data-testid="sidebar"
      className={classNames(
        cls.Sidebar,
        { [cls.Fullview]: fullview },
        [className, cls.Sidebar__opened],
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        className={cls.fullviewBtn}
        onClick={toggleSidebar}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {fullview ? '<' : '>'}
      </Button>
      <VStack role="navigation" gap="15" align="start" className={cls.items}>
        {sidebarItemList.map((item) => (
          <SidebarItem
            item={item}
            fullview={fullview}
            key={item.path}
          />
        ))}
      </VStack>
      <div className={cls.switchers}>
        <LanguageSwitcher short={!fullview} />
        <ThemeSwitcher />
      </div>
    </section>
  );
});
