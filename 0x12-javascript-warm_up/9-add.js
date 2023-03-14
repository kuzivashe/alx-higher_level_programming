#!/usr/bin/node
/* create an addition function */
const input0 = parseInt(process.argv[2]);
const input1 = parseInt(process.arg[3]);
function add (a, b) {
  let sum = 0;
  sum = a + b;
  console.log(sum);
}
add(input0, input1);
