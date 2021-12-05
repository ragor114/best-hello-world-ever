/* eslint-disable */

const FINISHED_SENTENCE = "Hello Niels!",
    WRITE_SPEED = 500;
var helloElement,
    timer;

function init() {
    helloElement = document.getElementById("hello_world");
    timer = setInterval(write, WRITE_SPEED);
}

function write() {
    let currentContent = helloElement.innerHTML;
    if(currentContent.length === FINISHED_SENTENCE.length){
        currentContent = "";
    } else {
        currentContent = currentContent + FINISHED_SENTENCE.charAt(currentContent.length);
    }
    helloElement.innerHTML = currentContent;
}

init();