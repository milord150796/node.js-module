'use strict';

let count = 0;

console.log("Counter initialized.");

module.exports = {
  increment: () => count++,
  value: () => count,
};
