console.log("executed script in loaded");
var variable = "variable";

console.log(executed);
console.log(content);
console.log(hey());

function getVariable() {
  return executed;
}

function setVariable(sentence) {
  variable += sentence;
  return variable;
}
// chrome.runtime.onMessage.addListener(function(request, sender, response) {
//   console.log("\t\t\t\t\t\t\t◆Executed Script◆");
//   console.log(request);
// });