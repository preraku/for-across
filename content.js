let isHidden = false;
let isAcrossHidden = false;
let isDownHidden = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received in content script", request, "from", sender);
  if (request.action === "toggleAcrossList") {
    const cluesDiv = document.querySelector(".clues");
    console.log("Clues div found:", !!cluesDiv);

    if (cluesDiv) {
      const subDivs = cluesDiv.querySelectorAll(".clues--list");
      console.log("Sub divs found:", subDivs.length);

      if (subDivs.length >= 2) {
        isAcrossHidden = !isAcrossHidden;
        subDivs[0].style.display = isAcrossHidden ? "none" : "";
        console.log(
          "Toggled visibility of second clues--list div. Now hidden:",
          isAcrossHidden
        );
      } else {
        console.log("Sub divs are not as expected");
      }
    } else {
      console.log("Clues div not found");
    }
  } else if (request.action === "toggleDownList") {
    const cluesDiv = document.querySelector(".clues");
    console.log("Clues div found:", !!cluesDiv);

    if (cluesDiv) {
      const subDivs = cluesDiv.querySelectorAll(".clues--list");
      console.log("Sub divs found:", subDivs.length);

      if (subDivs.length >= 2) {
        isDownHidden = !isDownHidden;
        subDivs[1].style.display = isDownHidden ? "none" : "";
        console.log(
          "Toggled visibility of first clues--list div. Now hidden:",
          isDownHidden
        );
      } else {
        console.log("Sub divs are not as expected");
      }
    } else {
      console.log("Clues div not found");
    }
  } else {
    console.log("Unknown action", request.action);
  }
});
