const newFactorial = require("../factorial/index.js");

const newRatio = require("../ratio/index.js");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = newRatio(num1, num2);
  const factorial = newFactorial(num3);
  const newObject = { ratio: ratio, factorial: factorial };
  return newObject;
};

module.exports = ratioAndFactorial;
