const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.reduce((acc, cur) => acc + cur.filter(val => val === '^^').length, 0);
};