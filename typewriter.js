"use strict";
window.addEventListener("load", start);
const displayText = document.querySelector("#typewriter").textContent;
let iterator;
let maxNumberOfIterations;
let text;
function start() {
  maxNumberOfIterations = displayText.length + 1;
  iterator = 0;
  loop();
}
function loop() {
  iterator++;
  if (iterator < maxNumberOfIterations) {
    text = displayText.slice(0, iterator);
    setTimeout(loop, 200);
    typeWrite();
  }
}
function typeWrite() {
  document.querySelector("#typewriter").innerHTML = text;
}
