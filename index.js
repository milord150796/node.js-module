'use strict';

const counter = require('./counter');

counter.increment();
console.log(`Counter value: ${counter.value()}`);

require('./secondary.js');

counter.increment();
console.log(`Counter value: ${counter.value()}`);

// 2 index.js
console.log('index.starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in index, a.done=%j,b.done=%j', a.done, b.done);

