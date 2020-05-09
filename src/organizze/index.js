const { addCheckBox } = require('./checkbox');
const { handleTableClick } = require('./table');

const buttonPressed = () => {
  const table = document.querySelector('#transactions-table');
  const columnRows = document.querySelectorAll('.CreditCard');

  if (table && columnRows) {
    addCheckBox(columnRows);
    table.addEventListener('click', handleTableClick);
  }
};

module.exports = {
  buttonPressed,
};
