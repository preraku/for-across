document.getElementById("toggleAcrossBtn").addEventListener("click", () => {
  console.log("Toggle button clicked");
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleAcrossList" });
    console.log("Toggle across sent to content script");
  });
});

document.getElementById("toggleDownBtn").addEventListener("click", () => {
  console.log("Toggle button clicked");
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleDownList" });
    console.log("Toggle down sent to content script");
  });
});
