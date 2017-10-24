
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log("in listener function");
    if( request.message === "bo_fill" ) {
      $("#headline").val(request.headline);
      $("#url").val(request.url);
      $("#image_url").val(request.image);
      $("#summary").val(request.text);
    }
  }
);

