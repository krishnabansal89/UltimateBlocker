export {};
console.log("Content Script Loaded!");
const reDriectUrl = "https://www.google.com";
const redirect = () => {
  const data = document.body.innerHTML;
  const allowedUrl = [
    "youtube.com",
    "github.com",
    "stackoverflow.com",
    "w3schools.com",
    "medium.com",
    "dev.to",
    "freecodecamp.org",
    "codecademy.com",
    "udemy.com",
    "coursera.org",
    "linkedin.com",
    "hackerrank.com",
    "leetcode.com",
    "codepen.io",
    "repl.it",
    "codesandbox.io",
    "glitch.com",
    "jsfiddle.net",
    "css-tricks.com",
    "web.dev",
    "developer.mozilla.org",
    "caniuse.com",
    "webplatform.org",
    "web.dev",
    "webdesign.tutsplus.com",
    "webdesignerdepot.com",
    "webdesignledger.com",
    "webdesignerwall.com",
    "webdesign.tutsplus.com",
    "webdesignerdepot.com",
    "webdesignledger.com",
    "webdesignerwall.com",
    "webdesign.tutsplus.com",
    "webdesignerdepot.com",
    "webdesignledger.com",
    "webdesignerwall.com",
    "webdesign.tutsplus.com",
    "webdesignerdepot.com",
    "webdesignledger.com",
    "webdesignerwall.com",
    "webdesign.tutsplus.com",
    "webdesignerdepot.com",
    "webdesignledger.com",
    "webdesignerwall.com",
    "webdesign.tutsplus.com",
    "webdesignerdepot.com",
    "webdesignledger.com",
    "webdesignerwall.com",
    "webdesign.tutsplus.com",
    "webdesignerdepot.com",
    "webdesignledger.com",
    "webdesignerwall.com",
    "webdesign.tutsplus.com",
    "webdesignerdepot.com",
    "webdesignledger.com",
    "webdesignerwall.com",
    "webdesign.tutsplus.com",
    "webdesignerdepot.com",
    "webdesignledger.com",
    "webdesignerwall.com",
    "webdesign.tutsplus.com",
    "webdesignerdepot.com",
    "webdesignledger.com",
    "webdesignerwall.com",
    "webdesign.tutsplus.com",
    "webdesignerdepot.com",
    "webdesignledger.com",
    "webdesignerwall.com",
    "webdesign",
  ];
  if (checker(data)) {
    console.log("Don't Let your Mind control You BUD!");
    const currenthref = window.location.href;
    if (!allowedUrl.some((url) => currenthref.includes(url))) {
      if (currenthref !== reDriectUrl) window.location.href = reDriectUrl;
    } 
  }
  else {
    console.log("You are killing it!!!");
  }
};
const checker = (data: string): boolean => {
  const wordList = ["porn", "18+", "adult", "nude", "naked", "xxx"];
  if (data) {
    for (const word of wordList) {
      if (data.includes(word)) {
        console.log("Word Found: ", word);
        return true;
      }
    }
  }
  return false;
};
const observer = new MutationObserver(redirect);
observer.observe(document.body, { childList: true, subtree: true });

chrome.runtime.onMessage.addListener((message) => {
  if (message.data === "privateNotAllowed") {
    console.log("Private Mode Not Allowed");
    window.location.href = "chrome://extensions/";
  }});