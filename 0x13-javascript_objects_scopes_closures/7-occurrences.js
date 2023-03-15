#!/usr/bin/node
/* create a number of occurrences function */
exports.nbOccurences = function (list, searchElement) {
  const limit = list.length;
  let result = 0;
  for (let i = 0; i < limit; i++) {
    if (list[i] === searchElement) {
      result += 1;
    }
  }
  return (result);
};
