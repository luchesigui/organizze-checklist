const { buttonPressed } = require('./organizze');

chrome
  .runtime
  .onMessage
  .addListener(buttonPressed);
