#!/usr/bin/node
/* recursion */
const input = parseInt(process.argv[2]);
let result = 0;
function recursion (a) {
  if (a) {
    return (a * recursion(a - 1));
  } else {
    return (1);
  }
}
result = recursion(input);
console.log(result);
