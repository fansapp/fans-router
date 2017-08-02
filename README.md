![](https://travis-ci.org/fansapp/fans-router.svg?branch=master)

# fans-router

An opinionated react-redux router library.

## Getting started

```
npm install --save fans-router
```

## Usage

Here's a simple example of Root component and a minimalist route setup (in the real world, separate into multiple files).
This configuration will allow support for `/`, `/login`, `/posts`, `/posts/:postId` and `/secret` paths.

```js
import { Provider } from 'react-redux';
import { createRouter, Provider as RouterProvider } from 'fans-router';

import Posts from '../../../posts/containers/Posts';
import Post from '../../../posts/containers/Post';
import Welcome from '../Welcome';
import FourOhFour from '../FourOhFour';
import Login from '../../../login/containers/Login';
import Secret from '../../../secret/components/Secret';


// Your supported routes
const routes = [
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
    ],
  },
];

// Route switch
const renderRoutes = (route) => {
  switch (route.name) {
    case 'root':
      return <Welcome />;
    case 'root.posts':
      return <Posts />;
    case 'root.posts.details':
      return <Post id={route.params.postId} />;
    case 'root.login':
      return <Login />;
    default:
      return <FourOhFour />;
  }
};

const App = ({ route }) => (
  <div className="App">
    <div className="Main">
      {renderRoutes(route)}
    </div>
  </div>
  );

export default (
  <Provider store={store}>
    <RouterProvider router={createRouter(routes)}>
      {App}
    </RouterProvider>
  </Provider>
);
```

## Route configuration

The routes array provided to `createRouter` should contain route objects.
Route objects can have the following keys:

#### `name`

**Type:** `string`

The name this route will be known in the store.
When nesting routes, names will be joined following the dot notation.

Example: `root.login`

#### `path`

Type: `string`

The path associated to this route.
When nesting routes, names will be joined with slashes.

Dynamic url parameters are also supported, simply supply your parameter by prefixing with a colon (like Express).

Example: `/posts/:postId` will populate the `params` attribute of the route object with `{ postId: 'value' }`

#### `routes`

**Type:** `array` of `object`

Optional. Contains all the routes to nest in the current route's scope.

## Route object

An object representing a route, which can that can be found in the store.

Route objects have the following structure:

#### `name`

**Type:** `string`

The name of the route.

Example: `root.login`

#### `path`

**Type:** `string`

The path associated to this route.

Example: `/login`

#### `query`

**Type:** `object`

A flat object of key values reflecting the url query params (`{ token: 'abc' }` -> `/posts?token=abc`).

#### `params`

**Type:** `object`

A flat object of key values reflecting dynamic parameters in the url (`{ postId: '5' }` -> `/posts/:postId` -> `/posts/5`). 

## Store

Routing information will be available in `store.router`, with the following structure:

#### `location`

Copy of the `history.location` object passed at router construction.

#### `route`

Informations about the current route. Includes name, path, query.

#### `routes`

A flattened version of the routes you provided at construction.
Should be provided when needed.

## Middlewares

Middlewares can also be provided to `RouterProvider`. 
The middleware array provided to should contain route middleware objects, 
acting as transition hooks and actions to be called upon a specifc route navigation.

```js
const middlewares = [
  {
    to: ['root.posts', 'root.posts.details'],
    call: updatePosts,
    onResolve: (posts, route, dispatch, state, next /* , abort */) => {
      dispatch({ type: 'POSTS.UPDATE', posts });
      next();
    },
  },
  {
    to: ['root.secret'],
    shouldNavigate: (route, state) => state.app.token,
    onNavigationCancelled: (route, dispatch) => dispatch(navigate('/login')),
  },
];

export default (
  <Provider store={store}>
    <RouterProvider router={createRouter(routes)} middlewares={middlewares}>
      {App}
    </RouterProvider>
  </Provider>
);
```

Middleware objects can have the following keys:

#### `to`

**Type:** `string` or `array` of `string`

Required. Contains the route names that will implement the transition hooks or actions.

#### `shouldNavigate`

**Type:** `function` returning a `boolean`

**Parameters:**
- `route` - The current route 
- `state` - The current redux store state

**Returns:** `true` by default

Optional. Specifies if or not the navigation should proceed or cancel at a preliminary state (i.e store token check).

#### `onNavigationCancelled`

**Type:** `function`

**Parameters:**
- `route` - The current route
- `dispatch` - Redux's dispatcher
- `state` - The current redux store state

Optional. Callback called when the navigation has cancelled because of a falsy `shouldNavigate`. 

#### `call`

**Type:** `function` returning a `Promise`

**Parameters:**
- `route` - The current route
- `state` - The current redux store state

**Returns:** resolving `Promise` by default

Optional. A `Promise` to be fulfilled before the navigation; could be an asynchronous call or any `Promise`, be creative!

#### `onResolve`

**Type:** `function`

**Parameters:**
- `result` - The current route
- `route` - The current route
- `dispatch` - Redux's dispatcher
- `state` - The current redux store state
- `next` - If or not the navigation should continue, fires exception if both `next` and `abort` aren't called
- `abort` - Aborts the navigation immediately, making a redirection possible (can't call both `abort` and `next`)

**Returns:** nothing, but executes `next()` by default if `onResolve` is not implemented

Optional. Callback called when the `Promise` provided in the `call` function has resolved.

#### `onReject`

**Type:** `function`

**Parameters:** 
- `result` - The current route
- `route` - The current route
- `dispatch` - Redux's dispatcher
- `state` - The current redux store state
- `next` - If or not the navigation should continue, fires exception if both `next` and `abort` aren't called
- `abort` - Aborts the navigation immediately, making a redirection possible (can't call both `abort` and `next`)

**Returns:** nothing, but executes `next()` by default if `onReject` is not implemented

Optional. Callback called when the `Promise` provided in the `call` function has rejected.


## Selectors

To easily get information from the store, various store selectors can also be imported from `fans-router`.

```js
import { getRoute, GetQuery, getParam } from 'fans-router';

```

Here are all the different selectors:

#### `getRoute`

**Parameters:** 
- `state` - The current redux store state

**Returns:** a route `object`

#### `getRoutes`

**Parameters:** 
- `state` - The current redux store state

**Returns:** an array of all the supported route `object`

#### `getRouteName`

**Parameters:** 
- `state` - The current redux store state

**Returns:** `string` of the current route name

#### `getRoutePath`

**Parameters:** 
- `state` - The current redux store state

**Returns:** `string` of the current route path

#### `getQuery`

**Parameters:** 
- `state` - The current redux store state

**Returns:** flat key value `object` of the url query

#### `getQueryParam`

**Parameters:** 
- `state` - The current redux store state
- `key` - The name of the query parameter

**Returns:** `string` value for the provided query parameter key

#### `getParams`

**Parameters:** 
- `state` - The current redux store state

**Returns:** flat key value `object` of the url dynamic parameters

#### `getParam`

**Parameters:** 
- `state` - The current redux store state
- `key` - The name of the dynamic parameter

**Returns:** `string` value for the provided dynamic parameter key
