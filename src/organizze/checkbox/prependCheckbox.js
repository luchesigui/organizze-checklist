const prependCheckbox = ({ row, checkbox }) => {
  row.prepend && row.prepend(checkbox);
  return row;
};

module.exports = prependCheckbox;