#!/usr/bin/node
/* import a list */
const listt = require('./100-data').list;

const mapped = listt.map((x, index) => {
  return x * index;
});
console.log(listt);
console.log(mapped);
