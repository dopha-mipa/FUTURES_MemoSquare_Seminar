var count = 1;
var colorArr = ["#9cf486", "#c686f4", "#f293b0", "#7bfcfa", "#fcc87b"];

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    chrome.browserAction.setBadgeText(
              {text: String(count), tabId: tabs[0].id});
    chrome.browserAction.setBadgeBackgroundColor(
              {color: colorArr[count % 5], tabId: tabs[0].id});
  });
  count += 1;
});

chrome.cookies.getAll({url: "http://memo-square.com/"}, function(cookie) {
  console.log("\t\t\t\t\t\t\t\tCookies - get=========");
  console.log(cookie);
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
  console.log("\t\t\t\t\t\t\t\tTabs - onActivated=========");
  console.log(activeInfo);
});
