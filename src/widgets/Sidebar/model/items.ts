import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20_20.svg';
import MainIcon from 'shared/assets/icons/main-20_20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20_20.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean
}

export const SidebarItemList: SidebarItemType[] = [
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
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'LinkProfile',
    authOnly: true,
  },
];
