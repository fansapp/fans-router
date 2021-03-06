export default [
  {
    name: 'root',
    path: '/',
    routes: [
      {
        name: 'posts',
        path: '/posts',
        routes: [
          {
            name: 'details',
            path: '/:postId',
          },
        ],
      },
      {
        name: 'login',
        path: '/login',
      },
      {
        name: 'secret',
        path: '/secret',
      },
      {
        name: 'comments',
        path: '/comments',
      },
    ],
  },
];
