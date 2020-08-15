const { buttonPressed, reduceCreditFromBalance } = require('./organizze');

chrome
  .runtime
  .onMessage
  .addListener(buttonPressed);

chrome
  .runtime
  .onMessage
  .addListener(reduceCreditFromBalance);
