import { parse } from 'query-string';


const makeRouteObject = (name, search = null) => ({
  name,
  params: null,
  search,
});

export default (location, routes) => {
  const { pathname, search } = location;
  const component = routes.find(r => r.path === pathname);

  if (!component) {
    return makeRouteObject('');
  }

  if (!search) {
    return makeRouteObject(component.name);
  }

  return makeRouteObject(component.name, parse(search));
};
