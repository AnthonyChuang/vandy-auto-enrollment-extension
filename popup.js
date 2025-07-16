console.log("Popup loaded");

document.getElementById('triggerBtn').addEventListener('click', async () => {
  console.log("📤 Trigger button clicked");

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Only run if we're on the Class Cart page
  if (tab.url.includes("SearchClasses!input.action")) {
    chrome.tabs.sendMessage(tab.id, {
      action: 'triggerWaitlistSelection'
    });
  } else {
    alert("Please go to the Class Cart page before running this.");
    console.warn("Blocked trigger: not on Class Cart page", tab.url);
  }
});
