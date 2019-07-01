const utils = require('./utils');

const sum = (...args) => {
  let numbers = [...args];

  utils.checkArgsLength(args);
  utils.checkArgsType(args);

  const sumf = (...args) => {
    utils.checkArgsType(args);

    if (args.length) {
      numbers = [...numbers, ...args];
      return sumf;
    }

    return numbers.reduce((acc, curr) => acc + curr);
  };

  return sumf;
};

const s = sum(1)(2)(3)();

console.log(s);
