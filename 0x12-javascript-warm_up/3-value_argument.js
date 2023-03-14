#!/usr/bin/node
/* process.argv return arguments
the first argument is always node
the second is the executable file
the third is the executable file
*/
let x = 0;
x = process.argv[2];
if (x) {
  console.log(x);
} else {
  console.log('No argument');
}
