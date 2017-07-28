import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

const props = Object.getOwnPropertyNames(window)
      .filter(prop => typeof global[prop] === 'undefined')
      .map(prop => Object.getOwnPropertyDescriptor(window, prop));

Object.defineProperties(global, props);
