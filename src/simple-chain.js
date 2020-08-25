const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    value === undefined ? this.arr.push('( )') : this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof (position) === 'number' && position % 1 === 0 && position > 0 && position <= this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const result = this.arr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
