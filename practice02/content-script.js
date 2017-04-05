var content = "variable for content-script";

console.log("content script executed!");

window.addEventListener("click", function(e) {
  console.log("clicked from contentScript");
  chrome.runtime.sendMessage({msg: "execute script"});
});

chrome.runtime.onMessage.addListener(function(request, sender, response) {
  console.log("\t\t\t\t\t\t\t◈Content Script◈");
  console.log(request);
  if (request.msg == "log executed") {
    console.log(executed);
    // executed += " => variable is modified by content script";
    var ex = setVariable(" added sentence");
    console.log("ex");
  }
});

function hey() {
  return "timer";
}