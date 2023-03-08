import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SidebarItemList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [fullview, isFullview] = useState(false);

  const toggleSidebar = () => {
    isFullview((prev) => !prev);
  };

  return (
    <div
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
      <div className={cls.items}>
        {SidebarItemList.map((item) => (
          <SidebarItem
            item={item}
            fullview={fullview}
            key={item.path}
          />
        ))}
      </div>
      <div className={cls.switchers}>
        <LanguageSwitcher short={!fullview} />
        <ThemeSwitcher />
      </div>
    </div>
  );
});
