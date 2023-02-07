import { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [fullview, isFullview] = useState(false);

  const toggleSidebar = () => {
    isFullview((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        cls.Sidebar,
        { [cls.Fullview]: fullview },
        [className, cls.Sidebar__opened],
      )}
    >
      <button type="button" className={cls.button} onClick={toggleSidebar}>
        toggle
      </button>
      <div className={cls.switchers}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
