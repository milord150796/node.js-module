// 2 index.js
console.log('index.starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in index, a.done=%j,b.done=%j', a.done, b.done);
