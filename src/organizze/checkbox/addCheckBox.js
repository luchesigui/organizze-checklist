const createCheckbox = require('./createCheckbox');
const prependCheckbox = require('./prependCheckbox');

const addCheckBox = (columnRows) => Array
  .from(columnRows)
  .map(createCheckbox)
  .map(prependCheckbox);

module.exports = addCheckBox;