'use strict';

const counter = require('./counter');

counter.increment();
console.log(`Counter value: ${counter.value()}`);

require('./secondary.js');

counter.increment();
console.log(`Counter value: ${counter.value()}`);

