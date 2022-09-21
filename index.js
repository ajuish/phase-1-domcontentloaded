// Your code goes here
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
//   });

//   console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );

const changeText = document.getElementById("text");

document.addEventListener("DOMContentLoaded", function() {
    changeText.textContent = "This is really cool!"
  });