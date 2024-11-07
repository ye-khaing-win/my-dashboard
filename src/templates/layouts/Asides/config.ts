import { THero2Icon } from '../../../types/hero2Icon.type';

export interface INavItem {
  id: string;
  icon: THero2Icon;
  text: string;
  to?: string;
  children?: INavItem[];
  type: 'item' | 'collapse';
}

export interface INavSeparator {
  id: string;
  type: 'separator';
}

export interface INavTitle {
  id: string;
  text: string;
  type: 'title';
}

export type TNavGroup = INavItem | INavTitle | INavSeparator;

const navGroups: TNavGroup[] = [
  { id: 'title_app', text: 'Apps', type: 'title' },
  {
    id: 'app_sales',
    icon: 'HiOutlineBanknotes',
    type: 'collapse',
    text: 'Sales',
    children: [
      {
        id: 'page_sales_dashboard',
        icon: 'HiOutlineRectangleGroup',
        type: 'item',
        to: '/',
        text: 'Sales Dashboard',
      },
      {
        id: 'page_product',
        icon: 'HiOutlineRectangleStack',
        type: 'collapse',
        text: 'Products',
        children: [
          {
            id: 'page_product_list',
            icon: 'HiOutlineQueueList',
            type: 'item',
            to: 'sales/product/list',
            text: 'Product List',
          },
          {
            id: 'page_product_details',
            icon: 'HiOutlineTicket',
            type: 'item',
            to: 'sales/product/1234',
            text: 'Product Details',
          },
        ],
      },
    ],
  },
  {
    id: 'app_project',
    icon: 'HiOutlineClipboardDocumentCheck',
    type: 'collapse',
    text: 'Project',
    children: [
      {
        id: 'page_sales_dashboard',
        icon: 'HiOutlineRectangleGroup',
        type: 'item',
        to: '/',
        text: 'Sales Dashboard',
      },
    ],
  },
  {
    id: 'separator_1',
    type: 'separator',
  },
];

export default navGroups;
