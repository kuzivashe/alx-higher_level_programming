#!/usr/bin/node
/* Create a Square class that inherits from Rectangle class in JS */
const Rectangle = require('./4-rectangle');
// initiate inheritance
module.exports = class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
};
