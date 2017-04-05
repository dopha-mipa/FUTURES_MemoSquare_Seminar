chrome.runtime.onMessage.addListener(function(request, sender, response) {
  console.log(request);
  if (request.msg == "execute script") {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {code: "var executed = 'variable for executed script'"}, function() {
        chrome.tabs.executeScript(tabs[0].id, {file: "executed-script.js"}, function() {
          console.log("executed-script가 실행되었습니다.");
        });
      });
      chrome.tabs.sendMessage(tabs[0].id, {msg: "log executed"});
    });
  }
});

// chrome.browserAction.onClicked.addListener(function() {
//   chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {msg: "Who receives this message?"});
//   });
// });
