#!/usr/bin/node
/* process.argv return arguments
the first argument is always node
the second is the executable file
the third is the first argument
*/
let a = '';
let b = '';
a = process.argv[2];
b = process.argv[3];
console.log(a + ' is ' + b);
