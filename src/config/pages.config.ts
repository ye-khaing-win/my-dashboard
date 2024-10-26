export const authPages = {
  loginPage: {
    id: 'login_page',
    to: '/login',
    text: 'Login',
    icon: 'HeroArrowRightOnRectangle',
  },
};

export const appPages = {
  salesAppPages: {
    id: 'salesApp',
    to: '/sales',
    text: 'Sales',
    icon: 'HeroBanknotes',
    subPages: {
      salesDashboardPage: {
        id: 'salesDashboardPage',
        to: '/',
        text: 'Sales Dashboard',
        icon: 'HeroRectangleGroup',
      },
      productPage: {
        id: 'productPage',
        to: '/sales/product',
        text: 'Products',
        icon: 'HeroRectangleStack',
        subPages: {
          listPage: {
            id: 'productsListPage',
            to: '/sales/product/list',
            text: 'Products List',
            icon: 'HeroQueueList',
          },
          editPageLink: {
            id: 'editPageLink',
            to: '/sales/product',
          },
        },
      },
    },
  },
};
