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
    ],
  },
];
