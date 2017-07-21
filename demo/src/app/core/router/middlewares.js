export default [
  {
    to: ['root.posts'],
    call: () => new Promise(resolve => setTimeout(() => resolve(), 1000)),
    onResolve: (result, route, dispatch, state, next) => {
      next();
    },
  },
];
