#!/usr/bin/node

const dictio = require('./101-data').dict;
const sets = new Set(Object.values(dictio));

const a = Array.from(sets);

const result = {};
/* fill the dictionary with empty list for each key */
for (let i = 0; i < a.length; i++) {
  result[a[i]] = [];
}
/* fill lists with content */
for (const key1 of Object.keys(result)) {
  for (const key2 of Object.keys(dictio)) {
    if (dictio[key2] === parseInt(key1)) {
      result[key1].push(key2);
    }
  }
}
console.log(result);
