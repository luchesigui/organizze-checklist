const splice = require('string-splice');

const currencyStringToNumber = (currency) => {
  const digits = currency.replace(/\D/g, '');
  const cents = digits.slice(-2);
  const number = splice(digits, -2, 2, `.${cents}`)
    .slice(0, digits.length + 1);

  return Number(number);
};

const currencyNumberToString = (currency) => {
  const currencyString = currency.toString();
  const dotFixed = currencyString
    .replace('.', ',')
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');

  return dotFixed;
};

module.exports = {
  currencyStringToNumber,
  currencyNumberToString,
};
