console.log("Background script running");

chrome.commands.onCommand.addListener((command) => {
  console.log("Command:", command);
  if (command === "cycleToggleState") {
    console.log("Cycle toggle state command received");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "cycleToggleState" });
    });
  }
});
