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

let carData = undefined;
let titanData = undefined;
let langData = undefined;
let lang = "fr";

// Starts with the instruction
let carName = "Click to generate a car name.";

//Start cartype as empty
let carType = undefined;

/**
 * Load the car and titan data
 */
function preload() {
  titanData = loadJSON("assets / data / greek_titans.json");
  carData = loadJSON("assets / data / cars.json");
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

  push();
  fill("pink");
  textAlign(CENTER, CENTER);
  textSize(32);
  text(carType + carName, width / 2, height / 2);
  pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {
  //Choose Car Type
  carType = random(carData.cars);
  //Choose Car Name
  carName = random(titanData.greek_titans);
}
