#!/usr/bin/node
const a = 'C is fun';
let num = process.argv[2];
num = parseInt(num);
let count = 0;
if (num) {
  for (; count < num; count++) {
    console.log(a);
  }
} else {
  console.log('Missing number of occurrences');
}
