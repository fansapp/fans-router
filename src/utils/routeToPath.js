import { stringify } from 'query-string';


const makePath = (basePath, search = null) => {
  let path = basePath;

  if (search) {
    path = path.concat(`?${stringify(search)}`);
  }

  return path;
};

export default (name, routes, search = null) => {
  const component = routes.find(r => r.name === name);

  if (!component) {
    return '';
  }

  if (!search) {
    return makePath(component.path);
  }

  return makePath(component.path, search);
};
