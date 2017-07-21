const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const scrollElementToTop = (selector) => {
  document.querySelector(selector).scrollTop = 0;
};

const scrollTo = (selector) => {
  document.querySelector(selector).scrollIntoView(true);
};

const addClass = (className, selector = 'body') => {
  document.querySelector(selector).classList.add(className);
};

const removeClass = (className, selector = 'body') => {
  document.querySelector(selector).classList.remove(className);
};

const toggleClass = (className, selector = 'body') => {
  document.querySelector(selector).classList.toggle(className);
};

const value = (selector, content = '') => {
  document.querySelector(selector).value = content;
};


export default {
  scrollTo,
  scrollElementToTop,
  scrollToTop,
  addClass,
  removeClass,
  toggleClass,
  value,
};
