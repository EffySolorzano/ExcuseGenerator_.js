/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {

  let subject = [
    "An alligator",
    "Florida man",
    "Aliens",
    "A herd of wild goats",
    "A human-sized raccoon",
    
  
  return "A dog chew my laptop at a McDonalds";
};
