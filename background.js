
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  	var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "bo_button_click"}); 
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
      var index = tabs[0].index;
      if( request.message === "open_bo_tab" ) {
        chrome.tabs.create({"url": "https://www.palacebeast.com/submit.php", "index": index + 1}, function (tab) {
          chrome.tabs.executeScript(tab.id, {file:"jquery-3.2.1.min.js"}, function() {
            chrome.tabs.executeScript(tab.id, {file:"boform.js", runAt: "document_end"}, function() {
              chrome.tabs.sendMessage(tab.id, {"message": "bo_fill", "image": request.image, "headline": request.headline, "url": request.url, "text": request.text});
            });
          });
        });
      }
    });
  }
);
