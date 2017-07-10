![](https://travis-ci.org/fansapp/fans-router.svg?branch=master)

# fans-rest

An opinionated react-redux router library.

## Getting started

```
npm install --save fans-router
```

## Usage

Here's a simple example of Root component.
This configuration will allow support for `/` and `/login` paths.

```js
import { Provider } from 'react-redux';
import { createRouter, Provider as RouterProvider } from 'fans-router';

const routes = [
  {
    name: 'root',
    path: '/',
    routes: [
      {
        name: 'login',
        path: 'login',
      }],
  }
];

export default (
  <Provider store={store}>
    <RouterProvider router={createRouter(routes)}>
      <App />
    </RouterProvider>
  </Provider>
);
```

## Route configuration

The routes array provided to `createRouter` should contain route objects.
Route objects can have the following keys:

#### `name`

Type: `string`

The name this route will be known in the store.
When nesting routes, names will be joined following the dot notation.

Example: `root.login`

#### `path`

Type: `string`

The path associated to this route.
When nesting routes, names will be joined with slashes.

#### `routes`

Type: `array` of `object`

Optional. Contains all the routes to nest in the current route's scope.

## Store

Routing information will be available in `store.router`, with the following structure:

#### `location`

Copy of the `history.location` object passed at router construction.

#### `route`

Informations about the current route. Includes name, path, query.

#### `routes`

A flattened version of the routes you provided at construction.
Should be provided when needed.
