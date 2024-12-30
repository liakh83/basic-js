const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainLinks: [],
  getLength() {
    this.chainLinks.length;
    return this;
  },
  addLink(value) {
    this.chainLinks.push(`( ${value} )`);
   return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) ||
      position > this.chainLinks.length ||
      position <= 0
    ) {
      this.chainLinks = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainLinks.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainLinks.reverse();
    return this;
  },
  finishChain() {
   const result = this.chainLinks.join('~~');
   this.chainLinks = [];
   return result;
  }
};

module.exports = {
  chainMaker
};
