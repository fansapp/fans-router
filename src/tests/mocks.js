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
    {
      name: 'clients',
      path: 'clients',
      routes: [
        {
          name: 'id',
          path: '/:clientId',
          routes: [
            {
              name: 'edit',
              path: '/edit',
            },
          ],
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
  {
    "name": "root.clients",
    "path": "/clients",
  },
  {
    "name": "root.clients.id",
    "path": "/clients/:clientId",
  },
  {
    "name": "root.clients.id.edit",
    "path": "/clients/:clientId/edit",
  },
];
