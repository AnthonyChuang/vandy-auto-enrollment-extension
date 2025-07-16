console.log("Waitlist Auto-Selector LOADED on:", window.location.href);
console.log("Vandy Waitlist Auto-Selector content script initialized");

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'triggerWaitlistSelection') {
    console.log("Received triggerWaitlistSelection");
    runWaitlistSelector();
  }
});

function simulateClick(el) {
  const event = new MouseEvent('mousedown', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  el.dispatchEvent(event);
}

async function runWaitlistSelector() {
    console.log("Starting Waitlist Auto-Selector with initial stall...");
    await new Promise(res => setTimeout(res, 1000)); // stall before anything
  
    const dropdowns = Array.from(document.querySelectorAll('.yui-button.yui-menu-button'));
    console.log(`Found ${dropdowns.length} class dropdown buttons`);
  
    for (let i = 0; i < dropdowns.length; i++) {
      const button = dropdowns[i].querySelector('button');
      if (!button) {
        console.warn(`No <button> found inside dropdown #${i + 1}`);
        continue;
      }
  
      console.log(`Clicking dropdown #${i + 1}`);
      simulateClick(button);
      await new Promise(res => setTimeout(res, 750)); // allow menu to show
  
      const visibleMenus = Array.from(document.querySelectorAll('.yui-menu-button-menu.visible'));
      console.log(`Found ${visibleMenus.length} visible menus`);
  
      let found = false;
      for (const menu of visibleMenus) {
        const options = Array.from(menu.querySelectorAll('.yuimenuitemlabel'));
        for (const option of options) {
          const text = option.textContent.trim().toLowerCase();
          if (text === 'waitlist if full') {
            option.click();
            console.log(`Selected "Waitlist If Full" for class #${i + 1}`);
            found = true;
            break;
          }
        }
        if (found) break;
      }
  
      if (!found) {
        console.warn(`Could not find "Waitlist If Full" for class #${i + 1}`);
      }
  
      await new Promise(res => setTimeout(res, 500)); // short pause before next
    }
  
    console.log("🎉 All dropdowns processed.");
  }  
  
  

const observer = new MutationObserver(() => {
    const dropdowns = document.querySelectorAll('.yui-button.yui-menu-button');
    if (dropdowns.length > 0) {
      console.log("MutationObserver: dropdowns appeared");
      observer.disconnect();
      runWaitlistSelector();
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  
  
