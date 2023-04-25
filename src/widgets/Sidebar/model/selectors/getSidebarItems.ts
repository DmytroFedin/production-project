import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about-20_20.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-20_20.svg';
import MainIcon from '@/shared/assets/icons/main-20_20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20_20.svg';
import { RoutePath } from '@/shared/const/router';
import { SidebarItemType } from '../types/items';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'LinkMain',
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'LinkAbout',
      },
    ];
    if (userData) {
      sidebarItemList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'LinkProfile',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticlesIcon,
          text: 'LinkArticles',
          authOnly: true,
        },
      );
    }
    return sidebarItemList;
  },
);
