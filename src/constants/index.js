export default null;

export const errorMessages = {
  invalidRouteType: 'Unexpected route type.',
  invalidRouteName: 'Unable to parse route.',
  routeNotFound: 'Unable to find requested route name.',
  invalidQueryType: 'Unexpected query type.',
  invalidQueryValue: 'Unexpected query value.',
  paramNotFound: "Missing required dynamic parameter '{param}'.",
  invalidNestedRoute: "Invalid route: '{route}' node not found.",
  // middlewares
  invalidMWRoute: "Route '{route}' not found for middleware.",
  requiredMWparams: "Each middleware needs the 'to' and 'call' attributes.",
  invalidTo: "The 'to' attribute can only be an array or string.",
  invalidCall: "The 'call' attribute can only be a Promise.",
  invalidFunction: 'The {param} attribute can only be an array or function.',
};
