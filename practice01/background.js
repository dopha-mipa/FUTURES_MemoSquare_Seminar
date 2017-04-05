var background = "variable for background";
// console.log(content);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("I receive a message from content script.");
  console.log(request);
  console.log(sender);
  sendResponse({reply: "How are you?"});
});

// chrome.browserAction.onClicked.addListener(function() {
//   chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {msg: "Nice to meet you"});
//   });
// });