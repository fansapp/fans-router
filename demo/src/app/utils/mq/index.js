export default (attribute, value) => window.matchMedia(`(${attribute}-width: ${value}px)`).matches;
