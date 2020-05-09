chrome
  .browserAction
  .onClicked
  .addListener(notifyContent);

function notifyContent({ id }) {
  const message = {
    action: 'SHOW_CHECKBOX',
  };

  chrome.tabs.sendMessage(id, message);
}
