#!/usr/bin/node
/* Create a Rectangle class in JS */
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  // print method
  print () {
    let row = '';
    let count = 0;
    // create the first row depending on the width
    for (; count < this.width; count++) {
      row = row + 'X';
    }
    count = 0;
    // print rows to determine the height
    for (; count < this.height; count++) {
      console.log(row);
    }
  }

  // hint: swap height and width
  rotate () {
    let temp = 0;
    temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  // double height and width
  double () {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
};
