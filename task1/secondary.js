'use strict';

const counter = require('./counter');

counter.increment();
console.log(`Counter value: ${counter.value()}`);