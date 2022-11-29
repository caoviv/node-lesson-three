const calculator = {
  sum: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },
};

console.log(calculator.sum(10, 10));

module.exports = calculator;
