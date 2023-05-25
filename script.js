const button = document.querySelector("#btn");
let counter = 0;
const span = document.querySelector("span");



function handleButtonEvent(){
    console.log("I have been clicked");
    counter= counter + 1;
    span.innerText = `total click ${counter}`;
}
button.addEventListener("click", handleButtonEvent);