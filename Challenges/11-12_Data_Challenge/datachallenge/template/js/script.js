/**
 * Naming My Car!
 * Anna Tsirbas & Pippin Barr
 *
 * A program to generate new car model names using Titans from Greek Mythology.
 *
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

const langButton = {
  x: 10,
  y: 10,
  w: 35,
  h: 25,
};

let carData = undefined;
let titanData = undefined;
let langData = undefined;

//The text of language the button
let language = "en";

// Starts with the instruction
let carName = "";

//Start cartype as empty
let carType = "";

//Instructions
let instructions = "Click to generate a car name";

/**
 * Load the car and titan data
 */
function preload() {
  titanData = loadJSON("assets/data/greek_titans.json");
  carData = loadJSON("assets/data/cars.json");
  langData = loadJSON("assets/data/lang.json");
}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(600, 400);
}

/**
 * Display the current main text (either instructions or a car)
 */
function draw() {
  background(0);
  drawLangButton();
  overlapLang();

  push();
  fill("pink");
  textAlign(CENTER, CENTER);
  textSize(32);
  text(instructions, width / 2, height / 2);
  pop();
}

function drawLangButton() {
  // Rectangle for Language Button
  push();
  noStroke();
  fill("white");
  rect(langButton.x, langButton.y, langButton.w, langButton.h);
  pop();

  //Text for language button
  push();
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(20);
  text(language, langButton.x, langButton.y, langButton.w, langButton.h);
  pop();
}

function overlapLang() {
  //The distance between Mouse and button
  const d = dist(langButton.x, langButton.y, mouseX, mouseY);
  //Hover over button with mouse
  const hoverLang =
    d < langButton.w / 2 + langButton.y / 2 + mouseX / 2 + mouseY / 2;
}

/**
 * Make Toggle for language button
 */
function toggleLanguage() {
  if (language === "en") {
    language = "fr";
    instructions = langData.fr;
  } else {
    language = "en";
    instructions = langData.en;
  }
}

/**
 * Generate a new car type and car name
 */
function mousePressed() {
  // Check if the mouse is inside the language button
  if (
    mouseX > langButton.x &&
    mouseX < langButton.x + langButton.w &&
    mouseY > langButton.y &&
    mouseY < langButton.y + langButton.h
  ) {
    toggleLanguage();
  } else {
    // Otherwise, generate a car name
    carType = random(carData.cars);
    carName = random(titanData.greek_titans);
    instructions = carType + ": " + carName;
  }
}
