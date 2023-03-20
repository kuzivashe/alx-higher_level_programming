#!/usr/bin/node
/* convert from base 10 to the value input as argument */
exports.converter = function (base) {
  return function (number) {
    return number.toString(base);
  };
};
