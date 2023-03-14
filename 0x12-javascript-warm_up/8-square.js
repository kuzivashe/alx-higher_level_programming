#!/usr/bin/node
let num = process.argv[2];
num = parseInt(num);
let count0 = 0;
let count1 = 0;
let x = '';
if (num) {
  // create a X string num times, or X+num
  for (; count0 < num; count0++) {
    x = x + 'X';
  }
  // print num times variable x
  for (; count1 < num; count1++) {
    console.log(x);
  }
} else {
  console.log('Missing size');
}
