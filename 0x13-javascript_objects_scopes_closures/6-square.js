#!/usr/bin/node
/* create Square class that inherits from 5-square */
const Squares = require('./5-square');
module.exports = class Square extends Squares {
  charPrint (c = 'X') {
    let row = '';
    let count = 0;
    for (; count < this.width; count++) {
      row = row + c;
    }
    for (count = 0; count < this.height; count++) {
      console.log(row);
    }
  }
};
