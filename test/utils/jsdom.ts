import { JSDOM } from 'jsdom';

declare let global:NodeJS.Global;
// Setup browser environment so that we can test React components.
global['document'] = new JSDOM('<!doctype html><html><body></body></html>');
// global.window = document.parentWindow;
global['navigator'] = {
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36'
};

global['debug'] = function () {}; // NodeJS does not have console.debug, but React uses it.