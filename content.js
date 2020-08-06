
// console.log('Bo script loaded and started');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "bo_button_click" ) {
       var image = $("[property='og:image']").attr("content");
       var headline = $("[property='og:title']").attr("content");
       var url = $("[property='og:url']").attr("content");
       if (typeof url == 'undefined') {
         url = window.location.href;
       }
       var text = window.getSelection().toString() || $("[property='og:description']").attr("content");
       chrome.runtime.sendMessage({"message": "open_bo_tab", "image": image, "headline": headline, "url": url, "text": text});
    }
  }
);