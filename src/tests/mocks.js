export default null;


export const nested = [{
  name: 'root',
  path: '/',
  routes: [
    {
      name: 'about',
      path: '/about-us',
    },
    {
      name: 'products',
      path: '/products',
      routes: [
        {
          name: 'all',
          path: '/all',
        },
      ],
    },
  ],
}];

export const routes = [
  {
    name: 'root',
    path: '/',
  },
  {
    name: 'root.about',
    path: '/about-us',
  },
  {
    name: 'root.products',
    path: '/products',
  },
  {
    name: 'root.products.all',
    path: '/products/all',
  },
];
