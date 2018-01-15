/*
  Helper to splice together 2 arrays like arr.concat(),
  except elements in 'arr1' containig 'empty' are first "filled" with elements from arr2.
  ex: splice(['a', undefined, 'b'], ['c', 'd', 'e'])  --> ['a', 'c', 'b', 'd', 'e']
*/
const splice = (arr1, arr2, empty) => {
  const tempArr2 = Array.prototype.slice.call(arr2, 0);  // so this works with arguments objects
  const result = Array.prototype.slice.call(arr1, 0);

  for (let i = 0; i < result.length && tempArr2.length > 0; ++i) {
    if (result[i] === empty) {
      result[i] = tempArr2.shift();
    }
  }

  return result.concat(tempArr2);
}

/*
  Wrap a function to allow partial application,
  optional specify argument value to mean argument
  is being skipped (to allow currying from the right) - defaults to using undefined.
*/
export const curryable = (fn, maybeArgs) => {
  const argValues = maybeArgs === undefined ? [] : maybeArgs
  const capturedContext = this;

  return function() {
    // Update argument values with those supplied in this call (perform partial application)
    const newArgValues = splice(argValues, arguments, undefined);

    /* Check if sufficient arguments are provided,
       then call the function with correct context if so,
       otherwise return wrapper again passing values that were supplied for partial application
    */
    if (newArgValues.length === fn.length && !newArgValues.includes(undefined)) {
      return fn.apply(capturedContext, newArgValues);
    }
    return curryable(fn, newArgValues);
  };
};

export const matchRoute = curryable((routeName, routes) => {
  switch (typeof routes) {
    case 'string':
      return routeName.includes(routes);
    case 'object':
      if (!Array.isArray(routes)) {
        return false;
      }

      return routes.some(r => routeName.includes(r));
    default:
      return false;
  }
})

export default null;
