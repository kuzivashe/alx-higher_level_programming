#!/usr/bin/node
/* logs */
let count = 0;
exports.logMe = function (item) {
  console.log(count + ': ' + item);
  count += 1;
};
