const get = (key, options = {}) => {
  const value = localStorage.getItem(key);

  if (value === 'null' || value === null) {
    return null;
  }
  if ('as' in options && options.as === 'number') {
    return Number(value);
  }
  return value;
};


const set = (key, value) => {
  const val = value === undefined ? null : value;
  localStorage.setItem(key, val);
};


const remove = (key) => {
  localStorage.removeItem(key);
};


export default {
  get,
  remove,
  set,
};
