const {
  openAddTransactionModal,
  addTransactionButtonSelector,
} = require('./add-transaction');

describe('Open add transaction modal', () => {
  const spyClick = jest.fn();
  const spyQuerySelector = jest.fn(() => ({
    click: spyClick
  }));

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(document, 'querySelector').mockImplementation(spyQuerySelector);
  });

  it('shouldn\'t click when keyCode isn\'t 14', () => {
    // arrange
    const keyUpEvent = { 'keyCode': 13 };
    
    // act
    openAddTransactionModal(keyUpEvent);

    // assert
    expect(spyClick).not.toBeCalled();
  });
  
  it('should click on the right button when keyCode is 14 (ctrl + n)', () => {
    // arrange
    const keyUpEvent = { 'keyCode': 14 };

    // act
    openAddTransactionModal(keyUpEvent);

    // assert
    expect(spyQuerySelector).toBeCalledWith(addTransactionButtonSelector);
    expect(spyClick).toBeCalled();
  });
  
  it('should not click if the button doesn\'t exist', () => {
    // arrange
    const keyUpEvent = { 'keyCode': 14 };
    const spyQuerySelectorWithNoMatch = jest.fn(() => null)
    jest.spyOn(document, 'querySelector').mockImplementation(spyQuerySelectorWithNoMatch);

    // act
    openAddTransactionModal(keyUpEvent);

    // assert
    expect(spyQuerySelectorWithNoMatch).toBeCalled();
    expect(spyClick).not.toBeCalled();
  });
});
