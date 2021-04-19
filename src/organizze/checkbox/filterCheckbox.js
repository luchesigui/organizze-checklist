const filterCheckbox = el =>
  el.getAttribute('type') !== 'checkbox';

module.exports = filterCheckbox;