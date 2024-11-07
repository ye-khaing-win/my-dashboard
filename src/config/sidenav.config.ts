import { TNavGroup } from '../interfaces/navGroup.interface';

const sideNavConfig: TNavGroup[] = [
  { id: 'title_app', text: 'Apps', type: 'title' },
  {
    id: 'app_sales',
    icon: {
      name: 'HiOutlineBanknotes',
      collection: 'hi2',
    },
    type: 'item',
    text: 'Sales',
    children: [
      {
        id: 'page_sales_dashboard',
        icon: {
          name: 'HiOutlineRectangleGroup',
          collection: 'hi2',
        },
        type: 'item',
        to: '/',
        text: 'Sales Dashboard',
      },
      {
        id: 'page_product',
        icon: {
          name: 'HiOutlineRectangleStack',
          collection: 'hi2',
        },
        type: 'item',
        text: 'Products',
        children: [
          {
            id: 'page_product_list',
            icon: {
              name: 'HiOutlineQueueList',
              collection: 'hi2',
            },
            type: 'item',
            to: 'sales/product/list',
            text: 'Product List',
          },
          {
            id: 'page_product_details',
            icon: {
              name: 'HiOutlineTicket',
              collection: 'hi2',
            },
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
    icon: {
      name: 'HiOutlineClipboardDocumentCheck',
      collection: 'hi2',
    },
    type: 'item',
    text: 'Project',
    children: [
      {
        id: 'page_sales_dashboard',
        icon: {
          name: 'HiOutlineRectangleGroup',
          collection: 'hi2',
        },
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

export default sideNavConfig;
