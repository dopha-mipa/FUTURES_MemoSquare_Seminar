var content = "variable for content-script";
// console.log(background)

console.log("content script executed!");

window.addEventListener("click", function(e) {
  console.log("clicked from contentScript");
  chrome.runtime.sendMessage({from: "content-script", msg: "Hello~"}, function(response) {
    // background sendResponse의 결과를 들음
    console.log(response);
  });
});

// chrome.runtime.onMessage.addListener(function(request, sender, response) {
//   // callback response 외의 메세지를 듣는 리스너
//   console.log(request)
//   console.log(sender)
//   console.log(response)
// });
