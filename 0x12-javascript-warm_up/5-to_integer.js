#!/usr/bin/node
/* process.argv return the arguments
the first argument is always node
the second is executable file
the third is the first argument
*/
let x = 0;
x = process.argv[2];
x = parseInt(x);
if (x) {
  console.log('My number: ' + x);
} else {
  console.log('Not a number');
}
