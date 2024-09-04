chrome.commands.onCommand.addListener((command) => {
  if (command === "cycleToggleState") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "cycleToggleState" });
    });
  }
});
