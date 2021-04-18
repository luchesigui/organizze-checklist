const openAddTransactionModal = (e) => {
  const { keyCode } = e;

  if (keyCode === 14) {
    const addButton = document.querySelector('#invoice-transactions-buttons i');
    if (addButton) {
      addButton.click();
    }
  }
};

module.exports = openAddTransactionModal;