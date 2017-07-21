export default {
  /**
   * Allows a {{#if_eq a b}} block, comparing if a === b
   * @param {object|array|string|number} a - The first item to be compared
   * @param {object|array|string|number} b - The second item to be compared
   * @param {object} opts - Required handlebars options
   * @return {function} The #if_eq helper
   */
  ifEqual(a, b, { fn, inverse }) {
    if (a === b) {
      return fn(this);
    }
    return inverse(this);
  },

  /**
   * Escapes single quotes.
   * @param {string} string Stringified string
   * @return {string}
   */
  escapeSingleQuotes: string => string.replace(/(')/g, '\\$1'),
};
