/* eslint-disable */
// import "bootstrap";
// import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let who_arry = who[Math.floor(Math.random() * who.length)];
let action_arry = action[Math.floor(Math.random() * action.length)];
let what_arry = what[Math.floor(Math.random() * what.length)];
let when_arry = when[Math.floor(Math.random() * when.length)];
let result = who_arry + " " + action_arry + " " + what_arry + " " + when_arry;
document.getElementById("excuse").innerHTML = result;
