/**
 * Making Pippin's Mr. Furious Very Mad
 * Anna Tsirbas
 *
 * Make A guy who becomes visibly furious, very furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225,
  },
};

let bird = {
  //Position and Size
  birdX: 50,
  birdY: 50,
  birdSize: 25,
  //Colour
  fill: {
    birdRed: 255,
    birdGreen: 174,
    birdBlue: 66,
  },
};
let skyBackground = {
  skyRed: 173,
  skyGreen: 216,
  skyBlue: 230,
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(
    skyBackground.skyRed,
    skyBackground.skyGreen,
    skyBackground.skyBlue
  );

  //Bird

  // Make Mr.Furious red from rage!
  push();
  mrFurious.fill.b = mrFurious.fill.b - 0.75;
  mrFurious.fill.g = mrFurious.fill.g - 0.75;
  pop();

  //Make Mr.Furious shake from rage!
  mrFurious.x = mrFurious.x + 1;
  mrFurious.x = constrain(2, 199, 202);


  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();

  //Sky goes from Day to Night
  push();
  skyBackground.skyRed = skyBackground.skyRed - 1;
  skyBackground.skyGreen = skyBackground.skyGreen - 1;
  skyBackground.skyBlue = skyBackground.skyBlue - 1;
  pop();
}
