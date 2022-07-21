let mute = document.getElementById("mute");

mute.addEventListener("click", async () => {
  console.log('Click!');
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  muteOtherTabs(tab.id);
});

function sendToggleRequest(tabId) {
  chrome.tabs.sendMessage(tabId, { type: "toggle-mute"}, function(response) {
    console.log("Toggle request sent");
  })
}

  function muteOtherTabs(tabId) {
    chrome.tabs.query( {}, function(tabs) {
        for (let i = 0; i < tabs.length; i++) {
          if(tabs[i].id != tabId)
            chrome.tabs.sendMessage(tabs[i].id, {type: "toggle-mute"});
        } 
    })
  }
