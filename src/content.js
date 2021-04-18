const {
  buttonPressed,
  reduceCreditFromBalance,
  addWatcherToAddTransaction,
} = require('./organizze');

chrome
  .runtime
  .onMessage
  .addListener(buttonPressed);

chrome
  .runtime
  .onMessage
  .addListener(reduceCreditFromBalance);

addWatcherToAddTransaction();
