const addTransactionButtonSelector = '#invoice-transactions-buttons i';

const openAddTransactionModal = (e) => {
  const { keyCode } = e;

  if (keyCode === 14) {
    const addButton = document.querySelector(addTransactionButtonSelector);
    if (addButton) {
      addButton.click();
    }
  }
};

module.exports = {
  openAddTransactionModal,
  addTransactionButtonSelector,
};