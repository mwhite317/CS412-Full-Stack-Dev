const stringMath = (original) => {
  return {
    "+": (left, right) => left + right,
    "-": (left, right) => left - right,
    "*": (left, right) => left * right,
    "/": (left, right) => left / right,
    "^": (left, right) => Math.pow(left, right),
  }[original[1]];
};

const operator = (expression) =>
  stringMath(expression)(parseInt(expression[0]), parseInt(expression[2]));
module.exports = { operator };
