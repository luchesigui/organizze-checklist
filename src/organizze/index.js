const { addCheckBox } = require('./checkbox');
const { handleTableClick } = require('./table');
const openAddTransactionModal = require('./add-transacion');

const {
  currencyNumberToString,
  currencyStringToNumber,
} = require('./balance-correction');

const buttonPressed = () => {
  const table = document.querySelector('#transactions-table');
  const columnRows = document.querySelectorAll('.CreditCard');

  if (table && columnRows) {
    addCheckBox(columnRows);
    table.addEventListener('click', handleTableClick);
  }
};

const reduceCreditFromBalance = () => {
  const balanceElement = document.querySelector('#box-balance .info-text big');
  const cardReceiptElement = document.querySelector('.cards-list .info p strong');
  if (!balanceElement || !cardReceiptElement) {
    return;
  }

  const balanceString = balanceElement.innerHTML;
  const cardReceiptString = cardReceiptElement.innerHTML;
  const balance = currencyStringToNumber(balanceString);
  const cardReceipt = currencyStringToNumber(cardReceiptString);

  const newTotal = balance - cardReceipt;
  const newBalance = `<i>R$</i>${currencyNumberToString(newTotal)}`;
  balanceElement.innerHTML = newBalance;
};

const addWatcherToAddTransaction = () => {
  document.addEventListener('keypress', openAddTransactionModal);
};

module.exports = {
  buttonPressed,
  reduceCreditFromBalance,
  addWatcherToAddTransaction,
};
