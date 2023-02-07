/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let subject = [
    "An alligator",
    "Florida man",
    "Aliens",
    "A herd of wild goats",
    "A human-sized raccoon",
    "A dog"
  ];

  let action = [
    "kidnapped",
    "fought over",
    "danced on and destroyed",
    "chew",
    "flew over"
  ];

  let predicate = [
    "my homework",
    "my french fries",
    "my boat",
    "my car",
    "my laptop",
    "one of my shoes"
  ];

  let location = [
    "at a McDonalds",
    "in the White House",
    "in my garage",
    "near my house",
    "at the office",
    "in my favorite coffee shop"
  ];

  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let predicateIndex = Math.floor(Math.random() * predicate.length);
  let locationIndex = Math.floor(Math.random() * location.length);

  return (
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    predicate[predicateIndex] +
    " " +
    location[locationIndex]
  );
};
