// EXAMPLES
// console.log("I came from the script tag in the page");
// var x = 5;
// console.log(x);
// x = "Banana";
// console.log(x);
// x = "55";
// console.log(x);

// Reach into the DOM and grab the element with the id=btn3
var btn3 = document.getElementById("btn3");
btn3.style.color = "red";
// console.log(btn3);
// declare a function
function logToConsole() {
  console.log("Button with id btn3 has been clicked");
}
// have the logToConsole() function run when the click event of btn 3 occurs.
btn3.addEventListener("click", logToConsole);
//
// btn3.onclick = () => {
//   alert("clicked");
// };

// function func1() {
//   console.log("I am func 1");
// }

// function func2() {
//   console.log("I am func 2");
// }
// function runFunction(func) {
//   func();
// }
// runFunction(func1);
// runFunction(func2);

//write code that causes an alert box to show when btn4 is clicked
var btn4 = document.getElementById("btn4");
// btn4.addEventListener("click", () => {
//   alert(" Btn4 button clicked");
// });
// function btnAlert() {
//   alert("Btn4 button clicked");
// }
// btn4.addEventListener("click", btnAlert);
btn4.onclick = () => {
  alert("Btn4 button clicked");
};
