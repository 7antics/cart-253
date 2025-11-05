/**
 * Frogfrogfrog
 * Pippin Barr
 *
 * A game of catching flies with your frog-tongue
 *
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 *
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
const frog = {
  // The frog's body has a position and size
  body: {
    x: 320,
    y: 520,
    size: 150,
    delay: false,
  },
  // The frog's tongue has a position, size, speed, and state
  tongue: {
    x: undefined,
    y: 480,
    size: 20,
    speed: 20,
    // Determines how the tongue moves each frame
    state: "idle", // State can be: idle, outbound, inbound
  },
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
  x: 0,
  y: 200, // Will be random
  size: 10,
  speed: 3,
};

const evilFly = {
  x: 0,
  y: 200, // Will be random
  size: 20,
  speed: 2,
};

//Properties for the start button
let startButton = {
  x: 50,
  y: 50,
  w: 20,
  h: 20,
  img: null,
  path: "assets/images/test.png",
};

//Properties for the setting button
let settingButton = {
  x: 100,
  y: 100,
  w: 20,
  h: 20,
  img: null,
  path: "assets/images/test.png",
};

//Properties for the menu button
let menuButton = {
  x: 80,
  y: 80,
  w: 20,
  h: 20,
  img: null,
  path: "assets/images/test.png",
};

//Game Intro instructions
let txt = {
  fill: "#000000",
  size: 15,
  str: "",
  info: {
    infoOne:
      "Starving! Famished! Mr.Frog is in dire need of food! Help him get those delicious flies!",
    infoTwo:
      "But be careful, there are some flies that cause weird side affects!",
    infoThree:
      "Mr.Frog will time his tongue to your clicks, so precision is important!",
    infoFour: "Press ANY KEY to Skip",
  },
};

let game = "menu";
let showStart = false;
let showSetting = false;
let menuSetting = false;

let clickTime = 0; // Start time of the mouse click
let clickDelay = 2000; // 2 second delay for the mouse click
let infoTime = 18000; //Time duration for the instruction game state

let evilflies = [];
let numEvilFlies = 2; // number of the evil flies on screen

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
  createCanvas(640, 480);

  startButton.img = loadImage(startButton.path);
  settingButton.img = loadImage(settingButton.path);
  menuButton.img = loadImage(menuButton.path);

  // Give the fly its first random position
  resetFly();
  resetEvil();
}

function draw() {
  background("#87ceeb");

  //Change to different screen/game states
  if (game === "menu") {
    menuScreen();
  } else if (game === "instructions") {
    infoScreen();
    if (millis() - clickTime > infoTime || keyIsPressed) {
      game = "play"; //Goes to play state after 18 seconds
    }
  } else if (game === "play") {
    playScreen();
  } else if (game === "end") {
    endScreen();
  }
}

function menuScreen() {
  drawButtons();
  drawMenuFly();
  drawMenuFly();

  //Add music and sound effects
  //Make setting button, volume? Sfx volume?
  //Add instructions/description scene before game starts
}

function infoScreen() {
  drawText();
}

function playScreen() {
  moveFlies();
  drawFly();
  drawEvilFly();
  moveFrog();
  moveTongue();
  drawFrog();
  checkTongueFlyOverlap();
}

function endScreen() {
  //Add score result
  //Add restart button and menu button
  //Add the run time for the game play
}

function clickButtons() {
  //When the mouse hovers over the start button
  let hoverStart =
    mouseX > startButton.x &&
    mouseX < startButton.x + startButton.w &&
    mouseY > startButton.y &&
    mouseY < startButton.y + startButton.h;

  //When the mouse hovers over the setting button
  let hoverSetting =
    mouseX > settingButton.x &&
    mouseX < settingButton.x + settingButton.w &&
    mouseY > settingButton.y &&
    mouseY < settingButton.y + settingButton.h;

  //When the mouse hovers over the menu button
  let hoverMenu =
    mouseX > menuButton.x &&
    mouseX < menuButton.x + menuButton.w &&
    mouseY > menuButton.y &&
    mouseY < menuButton.y + menuButton.h;

  //Clicking the start button
  if (hoverStart && mouseIsPressed && millis() - clickTime > clickDelay) {
    game = "instructions"; //Turns to infoScreen/next game state
    clickTime = millis(); //Changes the variable to when clicked last
  }

  if (hoverSetting && mouseIsPressed) {
    game = "null"; //Turns to
    clickTime = millis(); //Changes the variable to when clicked last
  }
  //Clicking the menu button
  if (hoverMenu && mouseIsPressed) {
    game = "null"; //Turns to
    clickTime = millis(); //Changes the variable to when clicked last
  }
}

function drawButtons() {
  image(
    startButton.img,
    startButton.x,
    startButton.y,
    startButton.w,
    startButton.h
  );

  image(
    settingButton.img,
    settingButton.x,
    settingButton.y,
    settingButton.w,
    settingButton.h
  );

  // image(menuButton.img, menuButton.x, menuButton.y, menuButton.w, menuButton.h);
}
function drawMenuFrog() {}

function drawMenuFly() {}

/**
 * Draw/Format the text for the instructions/information game state
 */
function drawText() {
  push();
  fill(txt.fill);
  textAlign(CENTER, CENTER);
  textSize(txt.size);
  textStyle(BOLD);
  text(txt.info.infoOne, width / 2, 220);
  pop();

  push();
  fill(txt.fill);
  textAlign(CENTER, CENTER);
  textSize(txt.size);
  textStyle(BOLD);
  text(txt.info.infoTwo, width / 2, 240);
  pop();

  push();
  fill(txt.fill);
  textAlign(CENTER, CENTER);
  textSize(txt.size);
  textStyle(BOLD);
  text(txt.info.infoThree, width / 2, 260);
  pop();

  push();
  fill(txt.fill);
  textAlign(CENTER, CENTER);
  textSize(txt.size);
  textStyle(BOLD);
  text(txt.info.infoFour, width / 2, 400);
  pop();
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */

function moveFlies() {
  // Move the fly
  fly.x += fly.speed;
  // Handle the fly going off the canvas
  if (fly.x > width) {
    resetFly();
  }

  //Move the Evil fly
  evilFly.x += evilFly.speed;
  //If the evil fly goes off the canvas
  if (evilFly.x > width) {
    resetEvil();
  }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
  push();
  noStroke();
  fill("#000000");
  ellipse(fly.x, fly.y, fly.size);
  pop();
}

/**
 * Draws the evil fly as a red circle
 */
function drawEvilFly() {
  push();
  noStroke();
  fill("#ff0000d5");
  ellipse(evilFly.x, evilFly.y, evilFly.size);
  pop();
}

/**
 * Resets the flies to the left with a random y
 */
function resetFly() {
  fly.x = 0;
  fly.y = random(0, 300);
}

/**
 * Resets the Evil flies to the left with a random y
 */
function resetEvil() {
  evilFly.x = 0;
  evilFly.y = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
  if (frog.body.delay) return;
  frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
  // Tongue matches the frog's x
  frog.tongue.x = frog.body.x;
  // If the tongue is idle, it doesn't do anything
  if (frog.tongue.state === "idle") {
    // Do nothing
  }
  // If the tongue is outbound, it moves up
  else if (frog.tongue.state === "outbound") {
    frog.tongue.y += -frog.tongue.speed;
    // The tongue bounces back if it hits the top
    if (frog.tongue.y <= 0) {
      frog.tongue.state = "inbound";
    }
  }
  // If the tongue is inbound, it moves down
  else if (frog.tongue.state === "inbound") {
    frog.tongue.y += frog.tongue.speed;
    // The tongue stops if it hits the bottom
    if (frog.tongue.y >= height) {
      frog.tongue.state = "idle";
    }
  }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
  // Draw the tongue tip
  push();
  fill("#ff0000");
  noStroke();
  ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
  pop();

  // Draw the rest of the tongue
  push();
  stroke("#ff0000");
  strokeWeight(frog.tongue.size);
  line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
  pop();

  // Draw the frog's body
  push();
  fill("#00ff00");
  noStroke();
  ellipse(frog.body.x, frog.body.y, frog.body.size);
  pop();
}

/**
 * Have a delay effect from eating the Evil Fly
 */
function frogDelay() {
  frog.body.delay = true;
  setTimeout(() => (frog.body.delay = false), 1000); // 1 second freeze
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
  // Get distance from tongue to fly
  const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
  // Check if it's an overlap
  const eaten = d < frog.tongue.size / 2 + fly.size / 2;
  if (eaten) {
    // Reset the fly
    resetFly();
    // Bring back the tongue
    frog.tongue.state = "inbound";
  }

  // Get distance from tongue to Evil fly
  const evilD = dist(frog.tongue.x, frog.tongue.y, evilFly.x, evilFly.y);
  // Check if it's an overlap
  const eatenEvil = evilD < frog.tongue.size / 2 + evilFly.size / 2;
  if (eatenEvil) {
    frogDelay(); // Timed delay of the frog body
    resetEvil(); // Reset the Evil fly
    frog.tongue.state = "inbound"; // Bring back the tongue
  }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
  if (frog.tongue.state === "idle") {
    frog.tongue.state = "outbound";
  }
  if (game === "menu") {
    clickButtons();
  }
}
