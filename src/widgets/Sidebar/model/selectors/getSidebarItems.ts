import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about-20_20.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-20_20.svg';
import MainIcon from '@/shared/assets/icons/main-20_20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20_20.svg';
import {
  getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';
import { SidebarItemType } from '../types/items';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'LinkMain',
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'LinkAbout',
      },
    ];
    if (userData) {
      sidebarItemList.push(
        {
          path: getRouteProfile(userData.id),
          Icon: ProfileIcon,
          text: 'LinkProfile',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticlesIcon,
          text: 'LinkArticles',
          authOnly: true,
        },
      );
    }
    return sidebarItemList;
  },
);
