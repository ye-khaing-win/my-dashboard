import { IIcon } from './icon.interface';

export interface INavTitle {
  id: string;
  text: string;
  type: 'title';
}

export interface INavSeparator {
  id: string;
  type: 'separator';
}

export interface INavItem {
  id: string;
  icon?: IIcon;
  text: string;
  to?: string;
  children?: INavItem[];
  type: 'item';
}

export type TNavGroup = INavItem | INavTitle | INavSeparator;
