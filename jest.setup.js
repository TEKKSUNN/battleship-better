// Polyfill TextEncoder and TextDecoder for Jest environment
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Correct usage of jsdom to create a new instance
const { JSDOM } = require('jsdom');
const { window } = new JSDOM('');
global.document = window.document;
global.window = window;
global.navigator = window.navigator;
