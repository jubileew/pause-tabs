chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Received")
    if (request.type === 'toggle-mute') {
        console.log("Toggle request received")
    }
    toggleMuteTab(sender)
  })

  function toggleMuteTab() {
    var videos = document.getElementsByTagName('video');
    console.log(videos.length);
    for(var i = 0; i < videos.length; i++)
    {
      console.log(videos.length);
      if(videos[i]) {
        if(!videos[i].paused)
        videos[i].pause();
        // else
        // videos[i].play();
      }
      else {
        console.log("No video element on page");
      }
    }

}
