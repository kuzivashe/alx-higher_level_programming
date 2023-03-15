#!/usr/bin/node
/* create a Rectanlge class in JS */
module.exports = new class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }
}();
