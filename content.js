let isAcrossHidden = false;
let isDownHidden = false;
let toggleState = 0; // 0: Hide Both, 1: Hide Down, 2: Hide Across, 3: Show Both

/**
 * Toggles the visibility of the clues list
 * @param {number} idx - 0 for across, 1 for down
 * @param {boolean} isHidden - previous state of the list
 * @returns {boolean} - new state of the list
 */
function toggleCluesList(idx, isHidden) {
  const cluesDiv = document.querySelector(".clues");

  if (cluesDiv) {
    const subDivs = cluesDiv.querySelectorAll(".clues--list");

    if (subDivs.length >= 2) {
      isHidden = !isHidden;
      subDivs[idx].style.display = isHidden ? "none" : "";
    }
  }
  return isHidden;
}

function cycleToggleState() {
  toggleState = (toggleState + 1) % 4;
  switch (toggleState) {
    case 0:
      isAcrossHidden = true;
      isDownHidden = true;
      toggleCluesList(0, isAcrossHidden);
      toggleCluesList(1, isDownHidden);
      break;
    case 1:
      isDownHidden = true;
      isAcrossHidden = false;
      toggleCluesList(0, isAcrossHidden);
      toggleCluesList(1, isDownHidden);
      break;
    case 2:
      isAcrossHidden = true;
      isDownHidden = false;
      toggleCluesList(0, isAcrossHidden);
      toggleCluesList(1, isDownHidden);
      break;
    case 3:
      isAcrossHidden = false;
      isDownHidden = false;
      toggleCluesList(0, isAcrossHidden);
      toggleCluesList(1, isDownHidden);
      break;
  }
}

chrome.runtime.onMessage.addListener((request, _sender, _sendResponse) => {
  if (request.action === "toggleAcrossList") {
    isAcrossHidden = toggleCluesList(0, isAcrossHidden);
  } else if (request.action === "toggleDownList") {
    isDownHidden = toggleCluesList(1, isDownHidden);
  } else if (request.action === "cycleToggleState") {
    cycleToggleState();
  }
});
